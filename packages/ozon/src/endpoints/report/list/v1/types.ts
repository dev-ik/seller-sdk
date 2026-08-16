import type { OzonReport } from "../../shared/types.js";
export interface ListReportsV1Request {
  /**
   * Номер страницы.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page: number;

  /**
   * Количество значений на странице: - по умолчанию — 100, - маĸсимальное значение — 1000.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page_size: number;

  /**
   * Тип отчёта: - `ALL` — все отчёты; - `SELLER_PRODUCTS` — отчёт по товарам; - `SELLER_STOCK` —
   * отчёт об остатках товаров; - `SELLER_RETURNS` — отчёт о возвратах; - `SELLER_POSTINGS` — отчёт
   * об отправлениях; - `SELLER_DISCOUNTED` — отчёт об уценённых товарах; - `MUTUAL_SETTLEMENT` —
   * отчёт о взаиморасчётах; - `DOCUMENT_B2B_SALES` — отчёт о продажах юридическим лицам; -
   * `COMPENSATION_REPORT` — отчёт о компенсациях; - `DECOMPENSATION_REPORT` — отчёт о
   * декомпенсациях; - `MARKED_PRODUCTS_SALES` — отчёт по продажам маркированных товаров; -
   * `SELLER_PLACEMENT_BY_PRODUCTS` — отчёт о стоимости размещения по товарам; -
   * `SELLER_PLACEMENT_BY_SUPPLIES` — отчёт о стоимости размещения по поставкам.
   *
   * Пример: `ALL`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly report_type?: string;
}
export interface ListReportsV1Response {
  readonly result?: {
    readonly reports?: readonly OzonReport[];
    readonly total?: number;
  };
}
