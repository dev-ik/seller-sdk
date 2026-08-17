// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsGroupsInfoResponse } from "./contract.js";
import type {
  PostV3DbsGroupsInfoInput,
  PostV3DbsGroupsInfoResponse,
} from "./types.js";

export const POST_V3_DBS_GROUPS_INFO_OPERATION_ID = "postV3DbsGroupsInfo";

const definition: WbOperationDefinition<PostV3DbsGroupsInfoResponse> = {
  operationId: POST_V3_DBS_GROUPS_INFO_OPERATION_ID,
  method: "POST",
  path: "/api/v3/dbs/groups/info",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsGroupsInfoResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsGroupsInfo(
  execute: WbOperationExecutor,
  input: PostV3DbsGroupsInfoInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsGroupsInfoResponse> {
  return execute(definition, input, options);
}
