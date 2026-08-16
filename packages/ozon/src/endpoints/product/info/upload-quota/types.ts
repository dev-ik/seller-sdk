export interface OzonProductDailyUploadQuota {
  /** Максимум за сутки; -1 означает отсутствие ограничения. */
  readonly limit?: number;
  /** Момент сброса суточного счётчика в формате RFC 3339. */
  readonly reset_at?: string;
  /** Использованное количество за текущие сутки. */
  readonly usage?: number;
}

export type OzonProductOperationLimitType =
  | "UNSPECIFIED"
  | "RATE_LIMIT_PER_MINUTE";

export interface OzonProductOperationLimit {
  /** Количество товаров, которое можно создать за минуту. */
  readonly limit?: number;
  readonly limit_type?: OzonProductOperationLimitType;
}

export interface OzonProductTotalUploadQuota {
  /** Максимальный ассортимент; -1 означает отсутствие ограничения. */
  readonly limit?: number;
  /** Текущее количество созданных товаров. */
  readonly usage?: number;
}

export interface GetProductUploadQuotaResponse {
  readonly daily_create?: OzonProductDailyUploadQuota;
  readonly daily_update?: OzonProductDailyUploadQuota;
  /** OpenAPI объявляет объект, но живой API также возвращает массив лимитов. */
  readonly operation_limits?:
    | OzonProductOperationLimit
    | readonly OzonProductOperationLimit[];
  readonly total?: OzonProductTotalUploadQuota;
}
