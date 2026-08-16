import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listCertificationCategoriesV1ResponseSchema } from "./contract.js";
import type {
  ListCertificationCategoriesV1Request,
  ListCertificationCategoriesV1Response,
} from "./types.js";
export const LIST_CERTIFICATION_CATEGORIES_V1_OPERATION_ID =
  "ProductAPI_V1ProductCertificationList";
export async function executeListCertificationCategoriesV1(
  transport: Transport,
  input: ListCertificationCategoriesV1Request,
  options: OzonRequestOptions = {},
): Promise<ListCertificationCategoriesV1Response> {
  const response = await transport.request({
    operationId: LIST_CERTIFICATION_CATEGORIES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/product/certification/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listCertificationCategoriesV1ResponseSchema,
    response.body,
    LIST_CERTIFICATION_CATEGORIES_V1_OPERATION_ID,
  );
}
