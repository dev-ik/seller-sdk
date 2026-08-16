export interface OzonFinancePeriodV1 {
  readonly begin?: string;
  readonly end?: string;
  readonly id?: number;
}
export interface OzonFinanceNamedAmountV1 {
  readonly name?: string;
  readonly price?: number;
}
export interface OzonFinanceAmountDetailsV1 {
  readonly items?: readonly OzonFinanceNamedAmountV1[];
  readonly total?: number;
}
export interface OzonFinanceCashFlowV1 {
  readonly commission_amount?: number;
  readonly currency_code?: string;
  readonly item_delivery_and_return_amount?: number;
  readonly orders_amount?: number;
  readonly period?: OzonFinancePeriodV1;
  readonly returns_amount?: number;
  readonly services_amount?: number;
}
export interface OzonFinanceCashFlowDetailsV1 {
  readonly begin_balance_amount?: number;
  readonly delivery?: {
    readonly amount?: number;
    readonly delivery_services?: OzonFinanceAmountDetailsV1;
    readonly total?: number;
  };
  readonly end_balance_amount?: number;
  readonly invoice_transfer?: number;
  readonly loan?: number;
  readonly others?: OzonFinanceAmountDetailsV1;
  readonly payments?: readonly {
    readonly currency_code?: string;
    readonly payment?: number;
  }[];
  readonly period?: OzonFinancePeriodV1;
  readonly return?: {
    readonly amount?: number;
    readonly return_services?: OzonFinanceAmountDetailsV1;
    readonly total?: number;
  };
  readonly rfbs?: {
    readonly compensation_delivery_return?: number;
    readonly partial_compensation?: number;
    readonly partial_compensation_return?: number;
    readonly total?: number;
    readonly transfer_delivery?: number;
    readonly transfer_delivery_return?: number;
  };
  readonly services?: OzonFinanceAmountDetailsV1;
}
export interface ListFinanceCashFlowV1Request {
  /**
   * Период формирования отчёта.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date: {
    /**
     * Дата, с ĸоторой рассчитывается отчёт.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly from: string;

    /**
     * Дата, по ĸоторую рассчитывается отчёт.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly to: string;
  };

  /**
   * Номер страницы, возвращаемой в запросе.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page: number;

  /**
   * Количество элементов на странице.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page_size: number;

  /**
   * `true`, если нужно добавить дополнительные параметры в ответ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with_details?: boolean;
}
export interface ListFinanceCashFlowV1Response {
  readonly result?: {
    readonly cash_flows?: readonly OzonFinanceCashFlowV1[];
    readonly details?: OzonFinanceCashFlowDetailsV1;
    readonly page_count?: number;
  };
}
