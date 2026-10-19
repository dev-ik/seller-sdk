export type ListAutoAddProductsV2Request = {
  /**
   * Идентификатор акции.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id: number;
  /**
   * Дата и время автодобавления товаров в акцию из параметра `result.auto_add_dates` в ответе метода
   * [/v1/actions](#operation/Promos).
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly auto_add_date: string;
  /**
   * Количество значений в ответе.
   *
   * Формат: `uint64`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
  /**
   * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, ответ
   * начнётся с 11-го найденного элемента.
   *
   * Формат: `uint64`. Пример: `0`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset?: number;
};

export type ListAutoAddProductsV2Response = {
  readonly products?: ReadonlyArray<{
    readonly action_price_to_auto_add?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly add_mode?: boolean;
    readonly base_price?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly currency?: string;
    readonly has_expired_min_seller_price?: boolean;
    readonly marketplace_seller_price?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly max_discount_price?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly min_action_quantity?: number;
    readonly min_seller_price?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly name?: string;
    readonly offer_id?: string;
    readonly price?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly product_id?: number;
    readonly quantity_to_auto_add?: number;
    readonly sku?: number;
    readonly website_prices?: {
      readonly price?: {
        readonly amount?: string;
        readonly currency?: string;
      };
      readonly prices_by_schema?: Readonly<
        Record<
          string,
          {
            readonly black_price?: {
              readonly amount?: string;
              readonly currency?: string;
            };
            readonly green_price?: {
              readonly amount?: string;
              readonly currency?: string;
            };
          }
        >
      >;
    };
    readonly will_be_quarantined?: boolean;
  }>;
  readonly total?: number;
};
