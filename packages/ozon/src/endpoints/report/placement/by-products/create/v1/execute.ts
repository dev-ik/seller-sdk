import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createPlacementByProductsReportV1ResponseSchema } from "./contract.js";
import type {
  CreatePlacementByProductsReportV1Request,
  CreatePlacementByProductsReportV1Response,
} from "./types.js";

export const CREATE_PLACEMENT_BY_PRODUCTS_REPORT_V1_OPERATION_ID =
  "CreatePlacementByProductsReport";

export async function executeCreatePlacementByProductsReportV1(
  transport: Transport,
  input: CreatePlacementByProductsReportV1Request,
  options: OzonRequestOptions = {},
): Promise<CreatePlacementByProductsReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_PLACEMENT_BY_PRODUCTS_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/report/placement/by-products/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createPlacementByProductsReportV1ResponseSchema,
    response.body,
    CREATE_PLACEMENT_BY_PRODUCTS_REPORT_V1_OPERATION_ID,
  );
}
