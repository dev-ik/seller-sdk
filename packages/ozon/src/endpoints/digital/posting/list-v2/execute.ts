import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listDigitalPostingsV2ResponseSchema } from "./contract.js";
import type {
  ListDigitalPostingsV2Request,
  ListDigitalPostingsV2Response,
} from "./types.js";

export const LIST_DIGITAL_POSTINGS_V2_OPERATION_ID = "PostingDigitalList";

/** @internal */
export async function executeListDigitalPostingsV2(
  transport: Transport,
  input: ListDigitalPostingsV2Request,
  options: OzonRequestOptions = {},
): Promise<ListDigitalPostingsV2Response> {
  const response = await transport.request({
    operationId: LIST_DIGITAL_POSTINGS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/digital/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listDigitalPostingsV2ResponseSchema,
    response.body,
    LIST_DIGITAL_POSTINGS_V2_OPERATION_ID,
  );
}
