/** Фильтр отправлений, повлиявших на индекс ошибок FBS и rFBS. */
export interface ListFbsRatingIndexPostingsFilter {
  /** Начало периода в RFC 3339. */
  readonly date_from: string;
  /** Конец периода в RFC 3339. */
  readonly date_to: string;
  /** Номера отправлений. */
  readonly posting_numbers?: readonly string[];
}

/** Параметры получения отправлений, повлиявших на индекс ошибок. */
export interface ListFbsRatingIndexPostingsRequest {
  /** Курсор следующей страницы. */
  readonly cursor?: string;
  /** Фильтр периода и отправлений. */
  readonly filter: ListFbsRatingIndexPostingsFilter;
  /** Количество значений, максимум 1000. */
  readonly limit: number;
}

/** Формально объявленный Swagger тип ошибки отправления. */
export type OzonFbsPostingErrorType =
  | "UNSPECIFIED"
  | "SELLER_CANCELLATION"
  | "SELLER_DELAY";

/** Отправление, повлиявшее на индекс ошибок FBS и rFBS. */
export interface OzonFbsRatingIndexPostingError {
  /** Процент стоимости обработки от стоимости отправления. */
  readonly charge_percent?: number;
  /** Стоимость обработки ошибок. */
  readonly charge_price?: number;
  /** Код валюты стоимости обработки ошибок. */
  readonly charge_price_currency_code?: string;
  /** Схема доставки. */
  readonly delivery_schema?: string;
  /** Дата возникновения ошибки в RFC 3339. */
  readonly error_at?: string;
  /** `true`, если у отправления льготный статус. */
  readonly has_grace_status?: boolean;
  /** Значение индекса ошибок. */
  readonly index?: number;
  /** Тип ошибки отправления. */
  readonly posting_error_type?: OzonFbsPostingErrorType;
  /** Номер отправления. */
  readonly posting_number?: string;
  /** Стоимость товара в отправлении. */
  readonly product_price?: number;
  /** Код валюты стоимости товара. */
  readonly product_price_currency_code?: string;
}

/** Список отправлений, повлиявших на индекс ошибок. */
export interface ListFbsRatingIndexPostingsResponse {
  /** Курсор следующей страницы. */
  readonly cursor?: string;
  /** Отправления с ошибками. */
  readonly errors?: readonly OzonFbsRatingIndexPostingError[];
  /** `true`, если доступны следующие отправления. */
  readonly has_next?: boolean;
}
