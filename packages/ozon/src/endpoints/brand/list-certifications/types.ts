/** Параметры получения списка сертифицируемых брендов. */
export interface ListBrandCertificationsRequest {
  /** Номер возвращаемой страницы. */
  readonly page: number;
  /** Количество элементов на странице. */
  readonly page_size: number;
}

/** Информация о бренде, для которого Ozon проверяет сертификаты. */
export interface OzonBrandCertification {
  /** Название бренда. */
  readonly brand_name?: string;
  /** По документации Ozon: `true` — сертификат не нужен, `false` — требуется. */
  readonly has_certificate?: boolean;
}

/** Результат получения сертифицируемых брендов. */
export interface OzonBrandCertificationResult {
  /** Информация о сертифицируемых брендах. */
  readonly brand_certification?: readonly OzonBrandCertification[];
  /** Общее количество брендов. */
  readonly total?: number;
}

/** Ответ со списком сертифицируемых брендов. */
export interface ListBrandCertificationsResponse {
  /** Результат запроса. */
  readonly result?: OzonBrandCertificationResult;
}
