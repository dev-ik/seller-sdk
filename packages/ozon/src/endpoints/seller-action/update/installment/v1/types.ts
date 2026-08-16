export interface UpdateSellerInstallmentActionV1Request {
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
     * Дата и время начала акции.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly date_start: string;

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

export type UpdateSellerInstallmentActionV1Response = void;
