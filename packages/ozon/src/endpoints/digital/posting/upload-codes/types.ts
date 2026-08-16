/** Коды цифрового товара для одного SKU. */
export interface OzonDigitalPostingCodesInput {
  /** Коды, передаваемые покупателю. */
  readonly exemplar_keys?: readonly string[];
  /** Количество передаваемых кодов. */
  readonly exemplar_qty: number;
  /** Количество кодов, которые продавец не может передать. */
  readonly not_available_exemplar_qty: number;
  /** Идентификатор товара Ozon. */
  readonly sku: number;
}

/** Параметры загрузки кодов цифровых товаров. */
export interface UploadDigitalPostingCodesRequest {
  /** Коды, сгруппированные по SKU. */
  readonly exemplars_by_sku?: readonly OzonDigitalPostingCodesInput[];
  /** Номер отправления. */
  readonly posting_number?: string;
}

/** Ошибка обработки отдельного цифрового кода. */
export interface OzonDigitalPostingCodeError {
  /** Код цифрового товара. */
  readonly key?: string;
  /** Текст ошибки. */
  readonly message?: string;
}

/** Результат загрузки кодов для одного SKU. */
export interface OzonDigitalPostingCodesResult {
  /** Коды, которые Ozon отклонил. */
  readonly failed_exemplars?: readonly OzonDigitalPostingCodeError[];
  /** Количество принятых кодов. */
  readonly received_qty?: number;
  /** Количество отклонённых или не переданных кодов. */
  readonly rejected_qty?: number;
  /** Идентификатор товара Ozon. */
  readonly sku?: number;
}

/** Результат загрузки кодов цифровых товаров. */
export interface UploadDigitalPostingCodesResponse {
  /** Результаты, сгруппированные по SKU. */
  readonly exemplars_by_sku?: readonly OzonDigitalPostingCodesResult[];
}
