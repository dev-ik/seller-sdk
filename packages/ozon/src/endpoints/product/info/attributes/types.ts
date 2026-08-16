import type { OzonProductListVisibility } from "../../list/types.js";

export type OzonProductAttributesVisibility = OzonProductListVisibility;

export interface GetProductAttributesFilter {
  /** Артикулы товаров в системе продавца. */
  readonly offer_id?: readonly string[];
  /** Идентификаторы товаров Ozon в формате int64-строк. */
  readonly product_id?: readonly string[];
  /** Идентификаторы SKU в формате int64-строк. */
  readonly sku?: readonly string[];

  /**
   * Фильтр по видимости товара: - `ALL` — все товары, кроме архивных; - `VISIBLE` — товары, которые
   * видны покупателям; - `INVISIBLE` — товары, которые не видны покупателям; - `EMPTY_STOCK` —
   * товары, у которых не указано наличие; - `NOT_MODERATED` — товары, которые не прошли модерацию; -
   * `MODERATED` — товары, которые прошли модерацию; - `DISABLED` — товары, которые видны
   * покупателям, но недоступны к покупке; - `STATE_FAILED` — товары, создание которых завершилось
   * ошибкой; - `READY_TO_SUPPLY` — товары, готовые к поставке; - `VALIDATION_STATE_PENDING` —
   * товары, которые проходят проверку валидатором на премодерации; - `VALIDATION_STATE_FAIL` —
   * товары, которые не прошли проверку валидатором на…
   *
   * Пример: `ALL`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly visibility?: OzonProductAttributesVisibility;
}

export interface GetProductAttributesRequest {
  /**
   * Фильтр по товарам.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: GetProductAttributesFilter;
  /** Cursor из предыдущего ответа; при первом запросе можно не передавать. */
  readonly last_id?: string;
  /** От 1 до 1000 товаров. */
  readonly limit?: number;
  /** Поле сортировки, описанное Ozon: sku, offer_id, id или title. */
  readonly sort_by?: string;
  /** Направление сортировки. Swagger расходится в регистре допустимых значений. */
  readonly sort_dir?: string;
}

export interface OzonProductAttributeValue {
  readonly dictionary_value_id?: number;
  readonly value?: string;
}

export interface OzonProductAttribute {
  readonly complex_id?: number;
  readonly id?: number;
  readonly values?: readonly OzonProductAttributeValue[];
}

export interface OzonProductComplexAttributeValue {
  readonly dictionaryValueId?: number;
  readonly value?: string;
}

export interface OzonProductComplexAttribute {
  readonly complex_id?: number;
  readonly id?: number;
  readonly values?: readonly OzonProductComplexAttributeValue[];
}

export interface OzonProductAttributeImage {
  readonly default?: boolean;
  readonly file_name?: string;
  readonly index?: number;
}

export interface OzonProductAttributeModelInfo {
  readonly count?: number;
  readonly model_id?: number;
}

export interface OzonProductAttributePdf {
  readonly file_name?: string;
  readonly name?: string;
}

export interface OzonProductAttributesItem {
  readonly attributes?: readonly OzonProductAttribute[];
  readonly attributes_with_defaults?: readonly number[];
  readonly barcode?: string;
  readonly barcodes?: readonly string[];
  readonly color_image?: string;
  readonly complex_attributes?: readonly OzonProductComplexAttribute[];
  readonly depth?: number;
  readonly description_category_id?: number;
  readonly dimension_unit?: string;
  readonly height?: number;
  readonly id?: number;
  /** Swagger одновременно описывает URL-строки и объекты изображений. */
  readonly images?: readonly (string | OzonProductAttributeImage)[];
  readonly model_info?: OzonProductAttributeModelInfo;
  readonly name?: string;
  readonly offer_id?: string;
  readonly pdf_list?: readonly OzonProductAttributePdf[];
  readonly primary_image?: string;
  /** OpenAPI объявляет строку, но живой API также возвращает int64-число. */
  readonly sku?: string | number;
  readonly type_id?: number;
  readonly weight?: number;
  readonly weight_unit?: string;
  readonly width?: number;
}

export interface GetProductAttributesResponse {
  readonly last_id?: string;
  readonly result?: readonly OzonProductAttributesItem[];
  /** OpenAPI объявляет строку, но живой API также возвращает int64-число. */
  readonly total?: string | number;
}
