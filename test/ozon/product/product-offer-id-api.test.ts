import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeUpdateProductOfferIds,
  UPDATE_PRODUCT_OFFER_IDS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/offer-id/update/execute.js";

async function fixture(name: string): Promise<unknown> {
  return JSON.parse(
    await readFile(
      new URL(`../../fixtures/ozon/${name}`, import.meta.url),
      "utf8",
    ),
  ) as unknown;
}

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("ProductAPI offer identifiers", () => {
  it("updates offer identifiers without automatic retries", async () => {
    const mock = transport(
      await fixture("update-product-offer-ids.success.json"),
    );
    const input = {
      update_offer_id: [
        {
          offer_id: "TEST-OFFER-OLD",
          new_offer_id: "TEST-OFFER-NEW",
        },
      ],
    } as const;

    const response = await executeUpdateProductOfferIds(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: UPDATE_PRODUCT_OFFER_IDS_OPERATION_ID,
      method: "POST",
      path: "/v1/product/update/offer-id",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.errors?.[0]?.offer_id).toBe("TEST-OFFER-EXISTING");
  });

  it("rejects malformed item errors", async () => {
    await expect(
      executeUpdateProductOfferIds(
        transport(await fixture("update-product-offer-ids.malformed.json")),
        {
          update_offer_id: [
            {
              offer_id: "TEST-OFFER-OLD",
              new_offer_id: "TEST-OFFER-NEW",
            },
          ],
        },
      ),
    ).rejects.toMatchObject({
      operationId: UPDATE_PRODUCT_OFFER_IDS_OPERATION_ID,
    });
  });
});
