import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listProductCertificateOptionsV2ResponseSchema } from "./contract.js";
import type { ListProductCertificateOptionsV2Response } from "./types.js";

export const LIST_PRODUCT_CERTIFICATE_OPTIONS_V2_OPERATION_ID =
  "ProductCertificateOptions";

export async function executeListProductCertificateOptionsV2(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListProductCertificateOptionsV2Response> {
  const response = await transport.request({
    operationId: LIST_PRODUCT_CERTIFICATE_OPTIONS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/product/certification/options",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listProductCertificateOptionsV2ResponseSchema,
    response.body,
    LIST_PRODUCT_CERTIFICATE_OPTIONS_V2_OPERATION_ID,
  );
}
