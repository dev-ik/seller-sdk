import {
  array,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetSupplyOrderActProductsResponse } from "./types.js";

const actType = union([
  literal("UNSPECIFIED"),
  literal("ACCEPTANCE"),
  literal("DEFECT"),
  literal("SURPLUS"),
  literal("SHORTCOMING"),
]);

const money = object({
  amount: string().optional(),
  currency: string().optional(),
});

const amount = object({
  amount: money.optional(),
  amount_vat: money.optional(),
  amount_without_vat: money.optional(),
});

const skuInfo = object({
  barcode: string().optional(),
  image_link: string().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  price_without_vat: money.optional(),
  sku: integerSchema.optional(),
  vat: number().optional(),
});

const item = object({
  approved_amount: amount.optional(),
  approved_quantity: integerSchema.optional(),
  declared_quantity: integerSchema.optional(),
  fact_amount: amount.optional(),
  fact_quantity: integerSchema.optional(),
  sku_info: skuInfo.optional(),
});

const supplyAct = object({
  act_id: integerSchema.optional(),
  items: array(item).optional(),
  type: actType.optional(),
  unidentified_quantity: integerSchema.optional(),
});

const skuDefect = object({
  defect_reasons: array(string()).optional(),
  sku: integerSchema.optional(),
});

export const getSupplyOrderActProductsResponseSchema: Schema<GetSupplyOrderActProductsResponse> =
  object({
    skus_defects: array(skuDefect).optional(),
    supply_acts: array(supplyAct).optional(),
    supply_id: integerSchema.optional(),
  });
