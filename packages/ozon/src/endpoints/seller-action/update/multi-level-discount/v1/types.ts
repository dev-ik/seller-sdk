import type { OzonSellerActionDiscountLevel } from "../../../shared/v1/types.js";
export interface UpdateSellerMultiLevelDiscountActionV1Request {
  /**
   * Идентификатор акции. Получите значение параметра методом
   * [/v1/seller-actions/list](#operation/SellerActionsList).
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id?: number;

  /**
   * Параметры акции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_parameters?: {
    /**
     * Дата и время окончания акции.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly date_end: string;

    /**
     * Дата и время начала акции.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly date_start: string;

    /**
     * Уровни скидки.
     *
     * Минимум элементов: `2`. Максимум элементов: `4`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly discount_levels: readonly OzonSellerActionDiscountLevel[];

    /**
     * `true`, если акция только для юридических лиц.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly is_legal_entities_segment?: boolean;

    /**
     * Название акции.
     *
     * Минимальная длина: `1`. Максимальная длина: `256`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly title: string;
  };
}
export type UpdateSellerMultiLevelDiscountActionV1Response = void;
