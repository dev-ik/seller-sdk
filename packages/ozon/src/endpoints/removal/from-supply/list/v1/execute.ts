import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listSupplyReturnsV1ResponseSchema } from "./contract.js";
import type {
  ListSupplyReturnsV1Request,
  ListSupplyReturnsV1Response,
} from "./types.js";

export const LIST_SUPPLY_RETURNS_V1_OPERATION_ID =
  "GetSupplyReturnsSummaryReport";

export async function executeListSupplyReturnsV1(
  transport: Transport,
  input: ListSupplyReturnsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListSupplyReturnsV1Response> {
  const response = await transport.request({
    operationId: LIST_SUPPLY_RETURNS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/removal/from-supply/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listSupplyReturnsV1ResponseSchema,
    response.body,
    LIST_SUPPLY_RETURNS_V1_OPERATION_ID,
  );
}
