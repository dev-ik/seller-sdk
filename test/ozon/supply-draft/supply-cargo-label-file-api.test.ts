import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetSupplyCargoLabelFile,
  GET_SUPPLY_CARGO_LABEL_FILE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/cargoes/label/file/v1/execute.js";

describe("Supply cargo label file API", () => {
  it("maps the file GUID and returns a binary body", async () => {
    const mock = new MockTransport();
    const body = new Uint8Array([37, 80, 68, 70]).buffer;
    mock.enqueueResponse({ status: 200, headers: new Headers(), body });

    await expect(
      executeGetSupplyCargoLabelFile(mock, { file_guid: "test/file" }),
    ).resolves.toBe(body);
    expect(mock.requests[0]).toMatchObject({
      operationId: GET_SUPPLY_CARGO_LABEL_FILE_OPERATION_ID,
      method: "GET",
      path: "/v1/cargoes-label/file/test%2Ffile",
      responseType: "array-buffer",
      retrySafety: "safe",
    });
  });

  it("rejects a non-binary successful response", async () => {
    const mock = new MockTransport();
    mock.enqueueResponse({ status: 200, headers: new Headers(), body: {} });

    await expect(
      executeGetSupplyCargoLabelFile(mock, { file_guid: "test" }),
    ).rejects.toMatchObject({
      operationId: GET_SUPPLY_CARGO_LABEL_FILE_OPERATION_ID,
    });
  });
});
