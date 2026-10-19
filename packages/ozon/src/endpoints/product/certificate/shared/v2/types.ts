export type OzonCertificateAccordanceTypeV2 =
  | "UNKNOWN"
  | "EAEU"
  | "NATIONAL"
  | "CHEMICAL_PRODUCTS"
  | "SAFETY_DATA_SHEET"
  | "REJECTION_LETTER";

export type OzonCertificateTypeV2 =
  | "UNKNOWN"
  | "CERTIFICATE_OF_CONFORMITY"
  | "DECLARATION"
  | "CERTIFICATE_OF_REGISTRATION"
  | "REGISTRATION_CERTIFICATE"
  | "REFUSED_LETTER"
  | "VETERINARY_COVER_DOCUMENT"
  | "SAFETY_DATA_SHEET";

export type OzonCertificateProductTypeV2 =
  | "UNKNOWN"
  | "PRODUCTS_SUBJECT_TO_REGISTRATION"
  | "PESTICIDE"
  | "AGROCHEMICAL"
  | "FEED_ADDITIVE"
  | "MEDICAL_PRODUCT"
  | "MEDICINE"
  | "VETERINARY_DRUG"
  | "PHARMACEUTICAL_SUBSTANCE";

export interface OzonCertificateFileV2 {
  /**
   * Файл в кодировке Base64.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly file_content: string;

  /**
   * Название файла с расширением `.jpg`, `.jpeg`, `.png` или `.pdf`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name: string;
}

export interface OzonCertificateParamsV2 {
  /**
   * Стандарт сертификации: - `UNKNOWN` — неизвестный; - `EAEU` — стандарт сертификации ЕАЭС; -
   * `NATIONAL` — национальный стандарт сертификации; - `CHEMICAL_PRODUCTS` — паспорт безопасности
   * химической продукции; - `SAFETY_DATA_SHEET` — паспорт безопасности; - `REJECTION_LETTER` —
   * отказное письмо.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly accordance_type?: OzonCertificateAccordanceTypeV2;

  /**
   * Код страны, где выдали сертификат. Укажите код в верхнем регистре.
   *
   * Максимальная длина: `2`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly certificate_country?: string;

  /**
   * Тип сертификата: - `UNKNOWN` — неизвестный; - `CERTIFICATE_OF_CONFORMITY` — сертификат
   * соответствия; - `DECLARATION` — декларация о соответствии; - `CERTIFICATE_OF_REGISTRATION` —
   * свидетельство о государственной регистрации; - `REGISTRATION_CERTIFICATE` — регистрационное
   * удостоверение; - `REFUSED_LETTER` — отказное письмо; - `VETERINARY_COVER_DOCUMENT` —
   * ветеринарный сопроводительный документ; - `SAFETY_DATA_SHEET` — паспорт безопасности.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly certificate_type?: OzonCertificateTypeV2;

  /**
   * Информация о дате истечения сертификата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly expired_date?: {
    /**
     * Дата истечения сертификата. Не раньше `params.issue_date`. Не передавайте параметр, если указали
     * `infinite`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly date?: {
      /**
       * День.
       *
       * Формат: `int32`. Минимум: `0`. Максимум: `31`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly day?: number;

      /**
       * Месяц.
       *
       * Формат: `int32`. Минимум: `0`. Максимум: `12`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly month?: number;

      /**
       * Год.
       *
       * Формат: `int32`. Минимум: `0`. Максимум: `9999`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly year?: number;
    };

    /**
     * `true`, если сертификат бессрочный. Не передавайте параметр, если указали `date`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly infinite?: boolean;
  };

  /**
   * Файлы сертификата. Общий размер файлов — не больше 10 МБ.
   *
   * Максимум элементов: `30`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly files?: readonly OzonCertificateFileV2[];

  /**
   * Дата выдачи сертификата.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly issue_date?: string;

  /**
   * Ссылка на государственный реестр.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly link_to_registry?: string;

  /**
   * Название сертификата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name?: string;

  /**
   * Номер сертификата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly number?: string;

  /**
   * Тип товаров: - `UNKNOWN` — неизвестный; - `PRODUCTS_SUBJECT_TO_REGISTRATION` — продукт,
   * подлежащий государственной регистрации; - `PESTICIDE` — пестицид; - `AGROCHEMICAL` —
   * агрохимикат; - `FEED_ADDITIVE` — кормовая добавка; - `MEDICAL_PRODUCT` — медицинский продукт; -
   * `MEDICINE` — лекарственный препарат; - `VETERINARY_DRUG` — ветеринарный препарат; -
   * `PHARMACEUTICAL_SUBSTANCE` — фармацевтический ингредиент.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_type?: OzonCertificateProductTypeV2;

  /**
   * Список идентификаторов товара в системе Ozon — SKU.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus?: readonly string[];
}

export interface OzonCertificateParameterRequirementV2 {
  readonly name?: string;
  readonly required?: boolean;
}
