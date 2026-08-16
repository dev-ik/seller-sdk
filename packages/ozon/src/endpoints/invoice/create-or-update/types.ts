import type { OzonInvoiceHsCode } from "../shared/types.js";
export interface CreateOrUpdateInvoiceRequest {
  /**
   * Дата счёта-фактуры.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date: string;

  /**
   * HS-коды товаров.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly hs_codes?: readonly OzonInvoiceHsCode[];

  /**
   * Номер счёта-фактуры. Номер может содержать буквы и цифры, максимальная длина — 50 символов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly number?: string;

  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;

  /**
   * Стоимость, указанная в счёте-фактуре. Разделитель дробной части — точка, до двух знаков после
   * точки.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly price?: number;

  /**
   * Валюта счёта-фактуры: - `USD` — доллар, - `EUR` — евро, - `TRY` — турецкая лира, - `CNY` — юань,
   * - `RUB` — рубль, - `GBP` — фунт стерлингов. Значение по умолчанию — `USD`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly price_currency?: string;

  /**
   * Ссылка на счёт-фактуру. Чтобы создать ссылку, используйте метод
   * [v1/invoice/file/upload](#operation/invoice_upload).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly url: string;
}
export interface CreateOrUpdateInvoiceResponse {
  readonly result?: boolean;
}
