import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createPlacementBySuppliesReportV1ResponseSchema } from "./contract.js";
import type {
  CreatePlacementBySuppliesReportV1Request,
  CreatePlacementBySuppliesReportV1Response,
} from "./types.js";

export const CREATE_PLACEMENT_BY_SUPPLIES_REPORT_V1_OPERATION_ID =
  "CreatePlacementBySuppliesReport";

export async function executeCreatePlacementBySuppliesReportV1(
  transport: Transport,
  input: CreatePlacementBySuppliesReportV1Request,
  options: OzonRequestOptions = {},
): Promise<CreatePlacementBySuppliesReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_PLACEMENT_BY_SUPPLIES_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/report/placement/by-supplies/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createPlacementBySuppliesReportV1ResponseSchema,
    response.body,
    CREATE_PLACEMENT_BY_SUPPLIES_REPORT_V1_OPERATION_ID,
  );
}
