export interface OzonFinanceBalanceMoney {
  readonly currency_code?: string;
  readonly value?: number;
}

export interface OzonFinanceBalanceDetails {
  readonly partner_programs?: OzonFinanceBalanceMoney;
  readonly points_for_discounts?: string;
  readonly revenue?: OzonFinanceBalanceMoney;
}

export interface OzonFinanceBalanceFlow {
  readonly amount?: OzonFinanceBalanceMoney;
  readonly amount_details?: OzonFinanceBalanceDetails;
  readonly fee?: OzonFinanceBalanceMoney;
}

export interface GetFinanceBalanceV1Request {
  /**
   * Дата начала отчётного периода в формате `YYYY-MM-DD`.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_from: string;

  /**
   * Дата окончания отчётного периода в формате `YYYY-MM-DD`. Максимальный период между `date_from` и
   * `date_to` — 30 дней.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_to: string;
}

export interface GetFinanceBalanceV1Response {
  readonly cashflows?: {
    readonly returns?: OzonFinanceBalanceFlow;
    readonly sales?: OzonFinanceBalanceFlow;
    readonly services?: readonly {
      readonly amount?: OzonFinanceBalanceMoney;
      readonly name?: string;
    }[];
  };
  readonly total?: {
    readonly accrued?: OzonFinanceBalanceMoney;
    readonly closing_balance?: OzonFinanceBalanceMoney;
    readonly opening_balance?: OzonFinanceBalanceMoney;
    readonly payments?: readonly OzonFinanceBalanceMoney[];
  };
}
