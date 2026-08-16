export interface OzonFbsExemplarValidateMarkV5 {
  /**
   * Значение кода маркировки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly mark?: string;

  /**
   * Тип кода маркировки: - `mandatory_mark` — обязательная маркировка «Честный ЗНАК»; - `jw_uin` —
   * уникальный идентификационный номер (УИН) ювелирного изделия; - `imei` — IMEI мобильного
   * устройства.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly mark_type?: string;
}

export interface OzonFbsExemplarValidateItemV5 {
  /**
   * Номер грузовой таможенной декларации (ГТД).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly gtd?: string;

  /**
   * Список контрольных идентификационных знаков (КИЗ) и других маркировок в одном экземпляре.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly marks?: readonly OzonFbsExemplarValidateMarkV5[];

  /**
   * Регистрационный номер партии товара (РНПТ).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly rnpt?: string;

  /**
   * Фактический вес экземпляра.
   *
   * Формат: `float`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly weight?: number;
}

export interface OzonFbsExemplarValidateProductV5 {
  /**
   * Информация об экземплярах.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly exemplars: readonly OzonFbsExemplarValidateItemV5[];

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id: number;
}

export interface ValidateFbsPostingProductExemplarsV5Request {
  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;

  /**
   * Список товаров.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly products: readonly OzonFbsExemplarValidateProductV5[];
}

export interface OzonFbsExemplarValidationMarkV5 {
  readonly errors?: readonly string[];
  readonly mark?: string;
  readonly mark_type?: string;
  readonly valid?: boolean;
}

export interface OzonFbsExemplarValidationItemV5 {
  readonly errors?: readonly string[];
  readonly gtd?: string;
  readonly marks?: readonly OzonFbsExemplarValidationMarkV5[];
  readonly rnpt?: string;
  readonly valid?: boolean;
  readonly weight?: number;
}

export interface OzonFbsExemplarValidationProductV5 {
  readonly error?: string;
  readonly exemplars?: readonly OzonFbsExemplarValidationItemV5[];
  readonly product_id?: number;
  readonly valid?: boolean;
}

export interface ValidateFbsPostingProductExemplarsV5Response {
  readonly products?: readonly OzonFbsExemplarValidationProductV5[];
}
