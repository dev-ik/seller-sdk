import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  CREATE_CARRIAGE_PASSES_OPERATION_ID,
  executeCreateCarriagePasses,
} from "../../../packages/ozon/src/endpoints/pass/carriage/create/execute.js";
import {
  DELETE_CARRIAGE_PASSES_OPERATION_ID,
  executeDeleteCarriagePasses,
} from "../../../packages/ozon/src/endpoints/pass/carriage/delete/execute.js";
import {
  executeUpdateCarriagePasses,
  UPDATE_CARRIAGE_PASSES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/pass/carriage/update/execute.js";
import {
  executeListPasses,
  LIST_PASSES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/pass/list/execute.js";
import {
  CREATE_RETURN_PASSES_OPERATION_ID,
  executeCreateReturnPasses,
} from "../../../packages/ozon/src/endpoints/pass/return/create/execute.js";
import {
  executeUpdateReturnPasses,
  UPDATE_RETURN_PASSES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/pass/return/update/execute.js";
import {
  DELETE_RETURN_PASSES_OPERATION_ID,
  executeDeleteReturnPasses,
} from "../../../packages/ozon/src/endpoints/pass/return/delete/execute.js";

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

const vehicle = {
  driver_name: "Test Driver",
  driver_phone: "+00000000000",
  vehicle_license_plate: "TEST-PLATE",
  vehicle_model: "Test Vehicle",
} as const;

describe("Arrival pass API", () => {
  it("lists passes with cursor pagination", async () => {
    const mock = transport(await fixture("list-passes.success.json"));
    const input = { limit: 100, filter: { only_active_passes: true } };
    const response = await executeListPasses(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_PASSES_OPERATION_ID,
      path: "/v1/pass/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.arrival_passes?.[0]?.driver_name).toBe("Test Driver");
  });

  it("creates carriage passes without automatic retries", async () => {
    const mock = transport(
      await fixture("create-carriage-passes.success.json"),
    );
    const input = { arrival_passes: [{ ...vehicle }], carriage_id: 600000001 };
    const response = await executeCreateCarriagePasses(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: CREATE_CARRIAGE_PASSES_OPERATION_ID,
      path: "/v1/carriage/pass/create",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.arrival_pass_ids).toEqual(["700000001"]);
  });

  it("updates carriage passes without automatic retries", async () => {
    const mock = transport(await fixture("empty-pass.success.json"));
    const input = {
      arrival_passes: [{ ...vehicle, id: 700000001 }],
      carriage_id: 600000001,
    };
    await expect(
      executeUpdateCarriagePasses(mock, input),
    ).resolves.toBeUndefined();
    expect(mock.requests[0]).toMatchObject({
      operationId: UPDATE_CARRIAGE_PASSES_OPERATION_ID,
      path: "/v1/carriage/pass/update",
      retrySafety: "unsafe",
    });
  });

  it("deletes carriage passes without automatic retries", async () => {
    const mock = transport(await fixture("empty-pass.success.json"));
    const input = { arrival_pass_ids: ["700000001"], carriage_id: 600000001 };
    await expect(
      executeDeleteCarriagePasses(mock, input),
    ).resolves.toBeUndefined();
    expect(mock.requests[0]).toMatchObject({
      operationId: DELETE_CARRIAGE_PASSES_OPERATION_ID,
      path: "/v1/carriage/pass/delete",
      retrySafety: "unsafe",
    });
  });

  it("creates return passes without automatic retries", async () => {
    const mock = transport(await fixture("create-return-passes.success.json"));
    const input = {
      arrival_passes: [
        {
          ...vehicle,
          arrival_time: "2026-08-20T10:00:00Z",
          dropoff_point_id: 800000001,
          warehouse_id: 900000001,
        },
      ],
    };
    const response = await executeCreateReturnPasses(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: CREATE_RETURN_PASSES_OPERATION_ID,
      path: "/v1/return/pass/create",
      retrySafety: "unsafe",
    });
    expect(response.arrival_pass_ids).toEqual(["700000002"]);
  });

  it("updates return passes without automatic retries", async () => {
    const mock = transport(await fixture("empty-pass.success.json"));
    const input = {
      arrival_passes: [
        {
          ...vehicle,
          arrival_pass_id: 700000002,
          arrival_time: "2026-08-20T11:00:00Z",
        },
      ],
    };
    await expect(
      executeUpdateReturnPasses(mock, input),
    ).resolves.toBeUndefined();
    expect(mock.requests[0]).toMatchObject({
      operationId: UPDATE_RETURN_PASSES_OPERATION_ID,
      path: "/v1/return/pass/update",
      retrySafety: "unsafe",
    });
  });

  it("deletes return passes without automatic retries", async () => {
    const mock = transport(await fixture("empty-pass.success.json"));
    const input = { arrival_pass_ids: ["700000002"] };
    await expect(
      executeDeleteReturnPasses(mock, input),
    ).resolves.toBeUndefined();
    expect(mock.requests[0]).toMatchObject({
      operationId: DELETE_RETURN_PASSES_OPERATION_ID,
      path: "/v1/return/pass/delete",
      body: input,
      retrySafety: "unsafe",
    });
  });

  it.each([
    {
      operationId: LIST_PASSES_OPERATION_ID,
      run: (m: MockTransport) => executeListPasses(m, { limit: 1 }),
      body: { arrival_passes: [{ is_active: "bad" }] },
    },
    {
      operationId: CREATE_CARRIAGE_PASSES_OPERATION_ID,
      run: (m: MockTransport) =>
        executeCreateCarriagePasses(m, {
          arrival_passes: [vehicle],
          carriage_id: 1,
        }),
      body: { arrival_pass_ids: [1] },
    },
    {
      operationId: UPDATE_CARRIAGE_PASSES_OPERATION_ID,
      run: (m: MockTransport) =>
        executeUpdateCarriagePasses(m, {
          arrival_passes: [{ ...vehicle, id: 1 }],
          carriage_id: 1,
        }),
      body: {},
    },
    {
      operationId: DELETE_CARRIAGE_PASSES_OPERATION_ID,
      run: (m: MockTransport) =>
        executeDeleteCarriagePasses(m, {
          arrival_pass_ids: ["1"],
          carriage_id: 1,
        }),
      body: {},
    },
    {
      operationId: CREATE_RETURN_PASSES_OPERATION_ID,
      run: (m: MockTransport) =>
        executeCreateReturnPasses(m, {
          arrival_passes: [
            {
              ...vehicle,
              arrival_time: "2026-08-20T10:00:00Z",
              dropoff_point_id: 1,
              warehouse_id: 1,
            },
          ],
        }),
      body: { arrival_pass_ids: [false] },
    },
    {
      operationId: UPDATE_RETURN_PASSES_OPERATION_ID,
      run: (m: MockTransport) =>
        executeUpdateReturnPasses(m, {
          arrival_passes: [
            {
              ...vehicle,
              arrival_pass_id: 1,
              arrival_time: "2026-08-20T10:00:00Z",
            },
          ],
        }),
      body: {},
    },
    {
      operationId: DELETE_RETURN_PASSES_OPERATION_ID,
      run: (m: MockTransport) =>
        executeDeleteReturnPasses(m, { arrival_pass_ids: ["1"] }),
      body: {},
    },
  ])("rejects malformed $operationId responses", async (testCase) => {
    await expect(testCase.run(transport(testCase.body))).rejects.toMatchObject({
      operationId: testCase.operationId,
    });
  });
});
