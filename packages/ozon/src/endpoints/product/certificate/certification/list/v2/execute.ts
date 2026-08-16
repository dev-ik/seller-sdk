import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listCertificationCategoriesV2ResponseSchema } from "./contract.js";
import type {
  ListCertificationCategoriesV2Request,
  ListCertificationCategoriesV2Response,
} from "./types.js";
export const LIST_CERTIFICATION_CATEGORIES_V2_OPERATION_ID =
  "ProductAPI_ProductCertificationList";
export async function executeListCertificationCategoriesV2(
  transport: Transport,
  input: ListCertificationCategoriesV2Request,
  options: OzonRequestOptions = {},
): Promise<ListCertificationCategoriesV2Response> {
  const response = await transport.request({
    operationId: LIST_CERTIFICATION_CATEGORIES_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/product/certification/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listCertificationCategoriesV2ResponseSchema,
    response.body,
    LIST_CERTIFICATION_CATEGORIES_V2_OPERATION_ID,
  );
}
