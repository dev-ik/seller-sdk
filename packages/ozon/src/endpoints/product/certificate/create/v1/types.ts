export type OzonCertificateTypeCode =
  | "certificate_of_conformity"
  | "declaration"
  | "certificate_of_registration"
  | "registration_certificate"
  | "refused_letter"
  | "veterinary_cover_document"
  | "safety_data_sheet";
export type OzonCertificateAccordanceTypeCode =
  | "technical_regulations_rf"
  | "technical_regulations_cu"
  | "gost";
export interface OzonCertificateUploadFile {
  readonly data: Blob;
  readonly filename?: string;
}
export interface CreateProductCertificateV1Request {
  /**
   * Массив сертификатов для товара. Допустимые расширения jpg, jpeg, png, pdf.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly files: readonly OzonCertificateUploadFile[];

  /**
   * Название сертификата. Максимум 100 символов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name: string;

  /**
   * Номер сертификата. Максимум 100 символов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly number: string;

  /**
   * Тип сертификата. Чтобы получить доступные типы, используйте метод [GET
   * /v1/product/certificate/types](#operation/ProductAPI_ProductCertificateTypes).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly type_code: OzonCertificateTypeCode;

  /**
   * Тип соответствия требованиям. Чтобы получить доступные типы, используйте метод [GET
   * /v1/product/certificate/accordance-types](#operation/ProductAPI_ProductCertificateAccordanceTypes).
   * Параметр обязательный, если `type_code = declaration`, `certificate_of_conformity` или
   * `safety_data_sheet`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly accordance_type_code?: OzonCertificateAccordanceTypeCode;

  /**
   * Дата начала действия сертификата.
   *
   * Формат: `date-time`. Пример: `2021-04-30T11:31:26Z`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly issue_date: string;

  /**
   * Дата окончания действия сертификата. Может быть пустым для бессрочных сертификатов. Формат:
   * `2021-04-30T11:31:26Z`.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly expire_date?: string;
}
export type CreateProductCertificateV1Response =
  | number
  | { readonly id?: number };
