import type { OzonFbsBooleanMutationResponse } from "../../../shared/boolean-mutation/types.js";
export interface OpenFbsPostingArbitrationV2Request {
  /**
   * Идентификатор отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: readonly string[];
}
export type OpenFbsPostingArbitrationV2Response =
  OzonFbsBooleanMutationResponse;
