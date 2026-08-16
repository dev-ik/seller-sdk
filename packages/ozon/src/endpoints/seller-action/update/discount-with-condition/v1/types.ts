export interface UpdateSellerDiscountWithConditionActionV1Request {
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
     * Размер скидки.
     *
     * Формат: `double`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly discount_value: number;

    /**
     * Минимальная сумма заказа для получения скидки.
     *
     * Формат: `double`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly min_order_amount: number;

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

export type UpdateSellerDiscountWithConditionActionV1Response = void;
