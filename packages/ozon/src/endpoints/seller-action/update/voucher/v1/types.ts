export interface UpdateSellerVoucherActionV1Request {
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
     * Бюджет акции. Перед тем как его изменить, выключите акцию методом
     * [/v1/seller-actions/change-activity](#operation/SellerActionsChangeActivity).
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly budget: number;

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
     * Название акции.
     *
     * Минимальная длина: `1`. Максимальная длина: `256`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly title: string;

    /**
     * Идентификаторы пользователей, которым доступен промокод.
     *
     * Максимум элементов: `50`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly user_ids?: readonly string[];
  };
}
export type UpdateSellerVoucherActionV1Response = void;
