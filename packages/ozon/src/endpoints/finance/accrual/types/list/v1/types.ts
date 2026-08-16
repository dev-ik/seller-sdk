export interface OzonFinanceAccrualType {
  readonly description?: string;
  readonly id?: number;
  readonly name?: string;
}

export interface ListFinanceAccrualTypesV1Response {
  readonly accrual_types?: readonly OzonFinanceAccrualType[];
}
