import type {
  OzonSupplyOrderActAmount,
  OzonSupplyOrderActMoney,
  OzonSupplyOrderActType,
} from "../get-summary/types.js";

export interface GetSupplyOrderActProductsRequest {
  /**
   * Идентификатор поставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: number;
}

export interface OzonSupplyOrderActSkuDefect {
  readonly defect_reasons?: readonly string[];
  readonly sku?: number;
}

export interface OzonSupplyOrderActProductSkuInfo {
  readonly barcode?: string;
  readonly image_link?: string;
  readonly name?: string;
  readonly offer_id?: string;
  readonly price_without_vat?: OzonSupplyOrderActMoney;
  readonly sku?: number;
  readonly vat?: number;
}

export interface OzonSupplyOrderActProductItem {
  readonly approved_amount?: OzonSupplyOrderActAmount;
  readonly approved_quantity?: number;
  readonly declared_quantity?: number;
  readonly fact_amount?: OzonSupplyOrderActAmount;
  readonly fact_quantity?: number;
  readonly sku_info?: OzonSupplyOrderActProductSkuInfo;
}

export interface OzonSupplyOrderActProductsAct {
  readonly act_id?: number;
  readonly items?: readonly OzonSupplyOrderActProductItem[];
  readonly type?: OzonSupplyOrderActType;
  readonly unidentified_quantity?: number;
}

export interface GetSupplyOrderActProductsResponse {
  readonly skus_defects?: readonly OzonSupplyOrderActSkuDefect[];
  readonly supply_acts?: readonly OzonSupplyOrderActProductsAct[];
  readonly supply_id?: number;
}
