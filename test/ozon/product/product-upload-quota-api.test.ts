import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetProductUploadQuota,
  GET_PRODUCT_UPLOAD_QUOTA_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/info/upload-quota/execute.js";

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

describe("ProductAPI upload quota", () => {
  it("gets product quotas without a request body and allows safe retries", async () => {
    const mock = transport(
      await fixture("get-product-upload-quota.success.json"),
    );

    const response = await executeGetProductUploadQuota(mock);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_UPLOAD_QUOTA_OPERATION_ID,
      method: "POST",
      path: "/v4/product/info/limit",
      retrySafety: "safe",
    });
    expect(mock.requests[0]).not.toHaveProperty("body");
    expect(response.daily_create?.usage).toBe(125);
    expect(response.daily_update?.limit).toBe(-1);
    expect(response.operation_limits).toMatchObject({
      limit_type: "RATE_LIMIT_PER_MINUTE",
    });
  });

  it("accepts an operation limits array returned by the live API", async () => {
    const body = await fixture("get-product-upload-quota.array-limits.json");

    await expect(
      executeGetProductUploadQuota(transport(body)),
    ).resolves.toEqual(body);
  });

  it("rejects undocumented operation limit types", async () => {
    await expect(
      executeGetProductUploadQuota(
        transport(await fixture("get-product-upload-quota.malformed.json")),
      ),
    ).rejects.toMatchObject({
      operationId: GET_PRODUCT_UPLOAD_QUOTA_OPERATION_ID,
    });
  });
});
