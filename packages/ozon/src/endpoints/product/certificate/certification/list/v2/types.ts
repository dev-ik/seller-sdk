export interface ListCertificationCategoriesV2Request {
  /**
   * Номер страницы.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page: number;

  /**
   * Количество элементов на странице.
   *
   * Формат: `int64`. Минимум: `1`. Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page_size: number;
}
export interface OzonCertificationCategoryV2 {
  readonly category_id?: number;
  readonly category_name?: string;
  readonly is_required?: boolean;
  readonly type_id?: number;
  readonly type_name?: string;
}
export interface ListCertificationCategoriesV2Response {
  readonly certification?: readonly OzonCertificationCategoryV2[];
  readonly total?: number;
}
