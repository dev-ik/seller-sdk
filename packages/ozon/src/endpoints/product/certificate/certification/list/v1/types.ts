export interface ListCertificationCategoriesV1Request {
  /**
   * Номер страницы, возвращаемой в запросе.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page?: number;

  /**
   * Количество элементов на странице.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page_size?: number;
}
export interface OzonCertificationCategoryV1 {
  readonly category_name?: string;
  readonly is_required?: boolean;
}
export interface ListCertificationCategoriesV1Response {
  readonly result?: {
    readonly certification?: readonly OzonCertificationCategoryV1[];
    readonly total?: number;
  };
}
