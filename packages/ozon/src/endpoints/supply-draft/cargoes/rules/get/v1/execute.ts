import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getSupplyCargoesRulesResponseSchema } from "./contract.js";
import type {
  GetSupplyCargoesRulesRequest,
  GetSupplyCargoesRulesResponse,
} from "./types.js";
export const GET_SUPPLY_CARGOES_RULES_OPERATION_ID =
  "CargoesAPI_CargoesRulesGet";
export async function executeGetSupplyCargoesRules(
  transport: Transport,
  input: GetSupplyCargoesRulesRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyCargoesRulesResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_CARGOES_RULES_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/rules/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyCargoesRulesResponseSchema,
    response.body,
    GET_SUPPLY_CARGOES_RULES_OPERATION_ID,
  );
}
