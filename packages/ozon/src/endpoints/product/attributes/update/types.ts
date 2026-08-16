export interface UpdateProductAttributesRequest {
  /** До 100 товаров в одном запросе. */
  readonly items: readonly OzonProductAttributeUpdateItem[];
}

export interface OzonProductAttributeUpdateValue {
  /**
   * Идентификатор характеристики в словаре.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly dictionary_value_id?: number;

  /**
   * Значение характеристики товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly value?: string;
}

export interface OzonProductAttributeUpdate {
  /**
   * Идентификатор характеристики, которая поддерживает вложенные свойства. У каждой из вложенных
   * характеристик может быть несколько вариантов значений.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly complex_id?: number;

  /**
   * Идентификатор характеристики.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id: number;

  /**
   * Массив вложенных значений характеристики.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly values: readonly OzonProductAttributeUpdateValue[];
}

export interface OzonProductAttributeUpdateItem {
  /**
   * Характеристики товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly attributes: readonly OzonProductAttributeUpdate[];

  /**
   * Идентификатор товара в системе продавца — артикул.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id: string;
}

export interface UpdateProductAttributesResponse {
  readonly task_id?: number;
}
