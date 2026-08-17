// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2TagNomenclatureLinkResponse } from "./contract.js";
import type {
  PostContentV2TagNomenclatureLinkInput,
  PostContentV2TagNomenclatureLinkResponse,
} from "./types.js";

export const POST_CONTENT_V2_TAG_NOMENCLATURE_LINK_OPERATION_ID =
  "POST /content/v2/tag/nomenclature/link";

const definition: WbOperationDefinition<PostContentV2TagNomenclatureLinkResponse> =
  {
    operationId: POST_CONTENT_V2_TAG_NOMENCLATURE_LINK_OPERATION_ID,
    method: "POST",
    path: "/content/v2/tag/nomenclature/link",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostContentV2TagNomenclatureLinkResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executePostContentV2TagNomenclatureLink(
  execute: WbOperationExecutor,
  input: PostContentV2TagNomenclatureLinkInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2TagNomenclatureLinkResponse> {
  return execute(definition, input, options);
}
