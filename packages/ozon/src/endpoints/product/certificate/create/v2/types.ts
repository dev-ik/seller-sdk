import type { OzonCertificateParamsV2 } from "../../shared/v2/types.js";

export interface CreateProductCertificateV2Request {
  /**
   * Параметры для создания сертификата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly params?: OzonCertificateParamsV2;
}

export type OzonCertificateParameterStateV2 = "VALID" | "INVALID" | "MISSING";
export type OzonCertificateCreationStatusV2 = "INCOMPLETE" | "COMPLETED";

export interface CreateProductCertificateV2Response {
  readonly certificate_id?: number | null;
  readonly params?: readonly {
    readonly error?: string;
    readonly name?: string;
    readonly state?: OzonCertificateParameterStateV2;
  }[];
  readonly status?: OzonCertificateCreationStatusV2;
}
