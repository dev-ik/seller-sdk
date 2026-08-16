/** Параметры получения подробной информации об эконом-товарах. */
export interface GetQuantProductsInfoRequest {
  /** От 1 до 1000 идентификаторов квантов. */
  readonly quant_code: readonly string[];
}

/** Информация о штрихкоде эконом-товара. */
export interface OzonQuantBarcode {
  /** Штрихкод. */
  readonly barcode?: string;
  /** Ошибка получения штрихкода. */
  readonly error?: string;
  /** Статус штрихкода. */
  readonly status?: string;
}

/** Габариты эконом-товара. */
export interface OzonQuantDimensions {
  /** Глубина, мм. */
  readonly depth?: number;
  /** Высота, мм. */
  readonly height?: number;
  /** Вес, г. */
  readonly weight?: number;
  /** Ширина, мм. */
  readonly width?: number;
}

/** Маркетинговая цена эконом-товара. */
export interface OzonQuantMarketingPrice {
  /** Цена продажи. */
  readonly price?: string;
  /** Цена продавца. */
  readonly seller_price?: string;
}

/** Описание статуса эконом-товара. */
export interface OzonQuantStatus {
  /** Описание статуса. */
  readonly state_description?: string;
  /** Название статуса. */
  readonly state_name?: string;
  /** Системное название статуса. */
  readonly state_sys_name?: string;
  /** Подсказка о состоянии. */
  readonly state_tooltip?: string;
}

/** Подробная информация о кванте эконом-товара. */
export interface OzonQuantProductDetails {
  /** Штрихкоды товара. */
  readonly barcodes_extended?: readonly OzonQuantBarcode[];
  /** Габариты. */
  readonly dimensions?: OzonQuantDimensions;
  /** Маркетинговая цена. */
  readonly marketing_price?: OzonQuantMarketingPrice;
  /** Минимальная цена продавца. */
  readonly min_price?: string;
  /** Зачёркнутая цена продавца. */
  readonly old_price?: string;
  /** Цена продажи продавца. */
  readonly price?: string;
  /** Идентификатор эконом-товара. */
  readonly quant_code?: string;
  /** Размер кванта; имя `quant_sice` сохранено из wire-схемы Ozon. */
  readonly quant_sice?: number;
  /** Тип доставки. */
  readonly shipment_type?: string;
  /** SKU товара. */
  readonly sku?: number;
  /** Статус товара. */
  readonly statuses?: OzonQuantStatus;
}

/** Набор квантов товара. */
export interface OzonQuantProductInfo {
  /** Кванты. */
  readonly quants?: readonly OzonQuantProductDetails[];
}

/** Эконом-товар с подробной информацией. */
export interface OzonQuantProductInfoItem {
  /** Артикул продавца. */
  readonly offer_id?: string;
  /** Идентификатор товара Ozon. */
  readonly product_id?: number;
  /** Информация о квантах. */
  readonly quant_info?: OzonQuantProductInfo;
}

/** Подробная информация об эконом-товарах. */
export interface GetQuantProductsInfoResponse {
  /** Эконом-товары. */
  readonly items?: readonly OzonQuantProductInfoItem[];
}
