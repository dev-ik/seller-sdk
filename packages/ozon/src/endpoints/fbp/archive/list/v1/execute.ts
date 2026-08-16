import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listFbpArchiveSuppliesV1ResponseSchema } from "./contract.js";
import type {
  ListFbpArchiveSuppliesV1Request,
  ListFbpArchiveSuppliesV1Response,
} from "./types.js";

export const LIST_FBP_ARCHIVE_SUPPLIES_V1_OPERATION_ID =
  "FbpAPI_FbpArchiveList";

export async function executeListFbpArchiveSuppliesV1(
  transport: Transport,
  input: ListFbpArchiveSuppliesV1Request,
  options: OzonRequestOptions = {},
): Promise<ListFbpArchiveSuppliesV1Response> {
  const response = await transport.request({
    operationId: LIST_FBP_ARCHIVE_SUPPLIES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/archive/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbpArchiveSuppliesV1ResponseSchema,
    response.body,
    LIST_FBP_ARCHIVE_SUPPLIES_V1_OPERATION_ID,
  );
}
