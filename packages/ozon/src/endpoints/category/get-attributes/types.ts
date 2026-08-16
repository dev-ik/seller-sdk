import type { OzonLanguage } from "../get-tree/types.js";

/** Параметры получения характеристик категории и типа товара. */
export interface GetDescriptionCategoryAttributesRequest {
  /** Идентификатор категории из дерева категорий. */
  readonly description_category_id: number;

  /** Язык ответа. По умолчанию Ozon использует русский язык. */
  readonly language?: OzonLanguage;

  /** Идентификатор типа товара из дерева категорий. */
  readonly type_id: number;
}

/** Характеристика категории Ozon. */
export interface OzonDescriptionCategoryAttribute {
  /** Идентификатор комплексной характеристики. */
  readonly attribute_complex_id?: number;
  /** Признак зависимости значений словарной характеристики от категории. */
  readonly category_dependent?: boolean;
  /** Признак, что комплексная характеристика является набором значений. */
  readonly complex_is_collection?: boolean;
  /** Описание характеристики. */
  readonly description?: string;
  /** Идентификатор справочника; `0` означает отсутствие справочника. */
  readonly dictionary_id?: number;
  /** Идентификатор группы характеристик. */
  readonly group_id?: number;
  /** Название группы характеристик. */
  readonly group_name?: string;
  /** Идентификатор характеристики. */
  readonly id?: number;
  /** Признак аспектной характеристики. */
  readonly is_aspect?: boolean;
  /** Признак набора значений. */
  readonly is_collection?: boolean;
  /** Признак обязательной характеристики. */
  readonly is_required?: boolean;
  /** Максимальное количество значений. */
  readonly max_value_count?: number;
  /** Название характеристики. */
  readonly name?: string;
  /** Тип характеристики. */
  readonly type?: string;
}

/** Результат получения характеристик категории. */
export interface GetDescriptionCategoryAttributesResponse {
  /** Характеристики категории и типа товара. */
  readonly result?: readonly OzonDescriptionCategoryAttribute[];
}
