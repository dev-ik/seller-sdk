/** Параметры создания штрихкодов Ozon. */
export interface GenerateProductBarcodesRequest {
  /** Идентификаторы товаров; описание ограничивает запрос 100 товарами. */
  readonly product_ids: readonly string[];
}

/** Ошибка создания штрихкода для конкретного товара. */
export interface OzonGenerateProductBarcodeError {
  /** Штрихкод, при создании которого произошла ошибка. */
  readonly barcode?: string;
  /** Код ошибки. */
  readonly code?: string;
  /** Описание ошибки. */
  readonly error?: string;
  /** Идентификатор товара. */
  readonly product_id?: number;
}

/** Результат создания штрихкодов. */
export interface GenerateProductBarcodesResponse {
  /** Ошибки отдельных товаров. */
  readonly errors?: readonly OzonGenerateProductBarcodeError[];
}
