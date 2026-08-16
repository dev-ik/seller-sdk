import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getRolesResponseSchema } from "./contract.js";
import type { GetRolesResponse } from "./types.js";

export const GET_ROLES_OPERATION_ID = "AccessAPI_RolesByToken";

/** @internal */
export async function executeGetRoles(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetRolesResponse> {
  const response = await transport.request({
    operationId: GET_ROLES_OPERATION_ID,
    method: "POST",
    path: "/v1/roles",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getRolesResponseSchema,
    response.body,
    GET_ROLES_OPERATION_ID,
  );
}
