export interface OzonAccrualMoney {
  readonly amount?: string;
  readonly currency?: string;
}

export interface OzonAccrualFee {
  readonly accrued?: OzonAccrualMoney;
  readonly type_id?: number;
}
