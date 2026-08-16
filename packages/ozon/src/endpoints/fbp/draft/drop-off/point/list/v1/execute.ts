import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listFbpDropOffPointsV1ResponseSchema } from "./contract.js";
import type {
  ListFbpDropOffPointsV1Request,
  ListFbpDropOffPointsV1Response,
} from "./types.js";
export const LIST_FBP_DROP_OFF_POINTS_V1_OPERATION_ID =
  "FbpDraftDropOffPointList";
export async function executeListFbpDropOffPointsV1(
  transport: Transport,
  input: ListFbpDropOffPointsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListFbpDropOffPointsV1Response> {
  const response = await transport.request({
    operationId: LIST_FBP_DROP_OFF_POINTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/drop-off/point/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbpDropOffPointsV1ResponseSchema,
    response.body,
    LIST_FBP_DROP_OFF_POINTS_V1_OPERATION_ID,
  );
}
