import type { OzonProductCertificate } from "../get-info/types.js";

export interface ListProductCertificatesRequest {
  /**
   * Страница, с которой следует выводить список. Минимальное значение — 1.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page: number;

  /**
   * Количество объектов на странице. Значение — от 1 до 1000.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page_size: number;

  /**
   * Идентификатор товара в системе продавца — артикул, привязанный к сертификату. Передайте
   * параметр, если нужны сертификаты, к которым привязаны определённые товары.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id?: string;

  /**
   * Статус сертификата. Передайте параметр, если нужны сертификаты с определённым статусом.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status?: string;

  /**
   * Тип сертификата. Передайте параметр, если нужны сертификаты с определённым типом.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly type?: string;
}

export interface ListProductCertificatesResponse {
  readonly result?: {
    readonly certificates?: readonly OzonProductCertificate[];
    readonly page_count?: number;
  };
}
