/** Штрихкод, который нужно привязать к товару Ozon. */
export interface OzonProductBarcodeInput {
  /** Значение штрихкода, не больше 100 символов по описанию Swagger. */
  readonly barcode: string;
  /** Идентификатор товара в системе Ozon — SKU. */
  readonly sku: number;
}

/** Параметры привязки штрихкодов. */
export interface AddProductBarcodesRequest {
  /** До 100 пар штрихкод/SKU. */
  readonly barcodes: readonly OzonProductBarcodeInput[];
}

/** Ошибка привязки конкретного штрихкода. */
export interface OzonAddProductBarcodeError {
  /** Штрихкод, который не удалось привязать. */
  readonly barcode?: string;
  /** Код ошибки. */
  readonly code?: string;
  /** Описание ошибки. */
  readonly error?: string;
  /** SKU товара. */
  readonly sku?: number;
}

/** Результат привязки штрихкодов. */
export interface AddProductBarcodesResponse {
  /** Ошибки отдельных элементов; отсутствие ошибки означает успешную обработку. */
  readonly errors?: readonly OzonAddProductBarcodeError[];
}
