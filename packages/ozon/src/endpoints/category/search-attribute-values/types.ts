/** Параметры поиска справочных значений характеристики. */
export interface SearchDescriptionCategoryAttributeValuesRequest {
  /** Идентификатор характеристики. */
  readonly attribute_id: number;
  /** Идентификатор категории. */
  readonly description_category_id: number;
  /** Количество значений от 1 до 100. */
  readonly limit: number;
  /** Идентификатор типа товара. */
  readonly type_id: number;
  /** Строка поиска длиной не менее двух символов. */
  readonly value: string;
}

/** Найденное справочное значение характеристики. */
export interface OzonDescriptionCategoryAttributeSearchValue {
  /** Идентификатор значения. */
  readonly id?: number;
  /** Дополнительная информация. */
  readonly info?: string;
  /** Ссылка на изображение. */
  readonly picture?: string;
  /** Значение характеристики. */
  readonly value?: string;
}

/** Результат поиска справочных значений характеристики. */
export interface SearchDescriptionCategoryAttributeValuesResponse {
  /** Найденные справочные значения. */
  readonly result?: readonly OzonDescriptionCategoryAttributeSearchValue[];
}
