import type {
  OzonCertificateParameterRequirementV2,
  OzonCertificateParamsV2,
} from "../../../shared/v2/types.js";

export interface GetProductCertificateParamsV2Request {
  /**
   * Параметры для создания сертификата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly params?: OzonCertificateParamsV2;
}

export interface GetProductCertificateParamsV2Response {
  readonly params?: readonly OzonCertificateParameterRequirementV2[];
}
