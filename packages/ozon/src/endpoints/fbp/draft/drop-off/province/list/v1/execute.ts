import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listFbpDropOffProvincesV1ResponseSchema } from "./contract.js";
import type {
  ListFbpDropOffProvincesV1Request,
  ListFbpDropOffProvincesV1Response,
} from "./types.js";
export const LIST_FBP_DROP_OFF_PROVINCES_V1_OPERATION_ID =
  "FbpDraftDropOffProvinceList";
export async function executeListFbpDropOffProvincesV1(
  transport: Transport,
  input: ListFbpDropOffProvincesV1Request,
  options: OzonRequestOptions = {},
): Promise<ListFbpDropOffProvincesV1Response> {
  const response = await transport.request({
    operationId: LIST_FBP_DROP_OFF_PROVINCES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/drop-off/province/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbpDropOffProvincesV1ResponseSchema,
    response.body,
    LIST_FBP_DROP_OFF_PROVINCES_V1_OPERATION_ID,
  );
}
