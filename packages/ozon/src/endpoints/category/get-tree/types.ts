/** Язык значений, возвращаемых Ozon. */
export type OzonLanguage = "DEFAULT" | "RU" | "EN" | "TR" | "ZH_HANS";

/** Параметры получения дерева категорий и типов товаров. */
export interface GetDescriptionCategoryTreeRequest {
  /** Язык ответа. По умолчанию Ozon использует русский язык. */
  readonly language?: OzonLanguage;
}

/** Узел дерева категорий и типов товаров. */
export interface OzonDescriptionCategoryTreeItem {
  /** Идентификатор категории. */
  readonly description_category_id?: number;

  /** Название категории. */
  readonly category_name?: string;

  /** Дерево подкатегорий. */
  readonly children?: readonly OzonDescriptionCategoryTreeItem[];

  /** `true`, если в категории нельзя создавать товары. */
  readonly disabled?: boolean;

  /** Идентификатор типа товара. */
  readonly type_id?: number;

  /** Название типа товара. */
  readonly type_name?: string;
}

/** Дерево категорий и типов товаров Ozon. */
export interface GetDescriptionCategoryTreeResponse {
  /** Список корневых категорий. */
  readonly result?: readonly OzonDescriptionCategoryTreeItem[];
}
