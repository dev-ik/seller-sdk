import type { OzonSellerReceiptV1 } from "../../shared/v1/types.js";

export interface ListSellerReceiptsV1Request {
  /**
   * Количество страниц, которое нужно пропустить.
   *
   * Формат: `int64`. Пример: `0`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page?: number;

  /**
   * Количество элементов на странице.
   *
   * Формат: `int64`. Максимум: `100`. Пример: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page_size?: number;

  /**
   * Фильтр по номерам отправлений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_numbers?: readonly string[];
}

export interface ListSellerReceiptsV1Response {
  readonly has_next?: boolean;
  readonly receipts?: readonly OzonSellerReceiptV1[];
}
