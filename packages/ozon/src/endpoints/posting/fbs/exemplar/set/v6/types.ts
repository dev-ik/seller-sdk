export interface OzonFbsExemplarSetMarkV6 {
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

export interface OzonFbsExemplarSetItemV6 {
  /**
   * Идентификатор экземпляра.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly exemplar_id: number;

  /**
   * Номер грузовой таможенной декларации (ГТД).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly gtd?: string;

  /**
   * Признак того, что не указан номер грузовой таможенной декларации (ГТД).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_gtd_absent?: boolean;

  /**
   * Признак того, что не указан регистрационный номер партии товара (РНПТ).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_rnpt_absent?: boolean;

  /**
   * Список контрольных идентификационных знаков (КИЗ) и других маркировок в одном экземпляре.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly marks?: readonly OzonFbsExemplarSetMarkV6[];

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

export interface OzonFbsExemplarSetProductV6 {
  /**
   * Информация об экземплярах.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly exemplars: readonly OzonFbsExemplarSetItemV6[];

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id: number;
}

export interface SetFbsPostingProductExemplarsV6Request {
  /**
   * Количество коробок, в которые упакован товар.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly multi_box_qty?: number;

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
  readonly products: readonly OzonFbsExemplarSetProductV6[];
}
