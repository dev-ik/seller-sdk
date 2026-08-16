import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createErfbsAggregatorWarehouseV1ResponseSchema } from "./contract.js";
import type {
  CreateErfbsAggregatorWarehouseV1Request,
  CreateErfbsAggregatorWarehouseV1Response,
} from "./types.js";

export const CREATE_ERFBS_AGGREGATOR_WAREHOUSE_V1_OPERATION_ID =
  "WarehouseERFBSAggregatorCreate";

export async function executeCreateErfbsAggregatorWarehouseV1(
  transport: Transport,
  input: CreateErfbsAggregatorWarehouseV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateErfbsAggregatorWarehouseV1Response> {
  const response = await transport.request({
    operationId: CREATE_ERFBS_AGGREGATOR_WAREHOUSE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/erfbs/aggregator/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createErfbsAggregatorWarehouseV1ResponseSchema,
    response.body,
    CREATE_ERFBS_AGGREGATOR_WAREHOUSE_V1_OPERATION_ID,
  );
}
