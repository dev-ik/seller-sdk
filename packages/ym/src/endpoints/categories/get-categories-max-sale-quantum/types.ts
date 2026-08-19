// Generated public types for this Yandex Market endpoint.
type CategoriesApiResponseStatusType = "OK" | "ERROR";
type CategoriesCategoryErrorDTO = {
  readonly categoryId?: number;
  readonly type?: CategoriesCategoryErrorType;
};
type CategoriesCategoryErrorType = "UNKNOWN_CATEGORY" | "CATEGORY_IS_NOT_LEAF";
type CategoriesGetCategoriesMaxSaleQuantumRequest = {
  readonly marketCategoryIds: readonly number[];
};
type CategoriesGetCategoriesMaxSaleQuantumResponse = {
  readonly status: CategoriesApiResponseStatusType;
  readonly results: readonly CategoriesMaxSaleQuantumDTO[];
  readonly errors?: readonly CategoriesCategoryErrorDTO[] | null;
};
type CategoriesMaxSaleQuantumDTO = {
  readonly id: number;
  readonly name?: string;
  readonly maxSaleQuantum?: number;
};

/**
 * Параметры метода «Лимит на установку кванта продажи и минимального количества товаров в заказе».
 *
 * Возвращает лимит на установку [кванта](*quantum) и минимального количества товаров в заказе, которые вы можете задать для товаров указанных категорий.
 *
 * Если вы передадите значение кванта или минимального количества товаров выше установленного Маркетом ограничения, товар будет скрыт с витрины.
 *
 * Подробнее о том, как продавать товары по несколько штук, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/fields/quantum).
 *
 * POST /v2/categories/max-sale-quantum
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetCategoriesMaxSaleQuantumInput = {
  /**
   * Тело запроса.
   */
  readonly body: CategoriesGetCategoriesMaxSaleQuantumRequest;
};
/**
 * Успешный ответ метода «Лимит на установку кванта продажи и минимального количества товаров в заказе».
 *
 * 200: Лимит на установку кванта и минимального количества товаров.
 */
export type GetCategoriesMaxSaleQuantumResponse =
  CategoriesGetCategoriesMaxSaleQuantumResponse;
