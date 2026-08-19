// Generated public types for this Yandex Market endpoint.
type CategoriesApiResponseStatusType = "OK" | "ERROR";
type CategoriesCategoryDTO = {
  readonly id: number;
  readonly name: string;
  readonly children?: readonly CategoriesCategoryDTO[] | null;
};
type CategoriesGetCategoriesRequest = {
  readonly language?: CategoriesLanguageType;
};
type CategoriesGetCategoriesResponse = {
  readonly status: CategoriesApiResponseStatusType;
  readonly result?: CategoriesCategoryDTO;
};
type CategoriesLanguageType = "RU" | "EN";

/**
 * Параметры метода «Дерево категорий».
 *
 * Возвращает дерево категорий Маркета.
 *
 * POST /v2/categories/tree
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetCategoriesTreeInput = {
  /**
   * Тело запроса.
   */
  readonly body?: CategoriesGetCategoriesRequest;
};
/**
 * Успешный ответ метода «Дерево категорий».
 *
 * 200: Категории Маркета.
 */
export type GetCategoriesTreeResponse = CategoriesGetCategoriesResponse;
