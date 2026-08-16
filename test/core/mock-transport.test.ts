import { describe, expect, it } from "vitest";
import { MockTransport } from "../../packages/core/src/core/mock-transport.js";

describe("MockTransport", () => {
  it("records requests and returns queued responses", async () => {
    const transport = new MockTransport();
    transport.enqueueResponse({
      status: 200,
      headers: new Headers(),
      body: { result: true },
    });

    const request = {
      operationId: "ozon.test",
      method: "POST" as const,
      path: "/v1/test",
      retrySafety: "safe" as const,
    };

    await expect(transport.request(request)).resolves.toMatchObject({
      status: 200,
    });
    expect(transport.requests).toEqual([request]);
  });

  it("fails loudly when no result is queued", async () => {
    const transport = new MockTransport();

    await expect(
      transport.request({
        operationId: "ozon.test",
        method: "POST",
        path: "/v1/test",
        retrySafety: "safe",
      }),
    ).rejects.toThrow("no queued result");
  });
});
