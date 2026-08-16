import type { OzonLanguage } from "../get-tree/types.js";

/** Параметры получения справочных значений характеристики. */
export interface GetDescriptionCategoryAttributeValuesRequest {
  /** Идентификатор характеристики. */
  readonly attribute_id: number;
  /** Идентификатор категории. */
  readonly description_category_id: number;
  /** Язык ответа. По умолчанию Ozon использует русский язык. */
  readonly language?: OzonLanguage;
  /** Идентификатор значения, после которого нужно продолжить выборку. */
  readonly last_value_id?: number;
  /** Количество значений от 1 до 2000. */
  readonly limit: number;
  /** Идентификатор типа товара. */
  readonly type_id: number;
}

/** Справочное значение характеристики. */
export interface OzonDescriptionCategoryAttributeValue {
  /** Идентификатор значения. */
  readonly id?: number;
  /** Дополнительное описание. */
  readonly info?: string;
  /** Ссылка на изображение. */
  readonly picture?: string;
  /** Значение характеристики. */
  readonly value?: string;
}

/** Результат получения справочных значений характеристики. */
export interface GetDescriptionCategoryAttributeValuesResponse {
  /** `true`, если для продолжения нужен запрос с новым `last_value_id`. */
  readonly has_next?: boolean;
  /** Справочные значения характеристики. */
  readonly result?: readonly OzonDescriptionCategoryAttributeValue[];
}
