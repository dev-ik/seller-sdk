import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import {
  accrualFeeSchema,
  accrualMoneySchema,
} from "../../../shared/v1/contract.js";
import type {
  GetFinanceAccrualByDayV1Response,
  OzonFinanceAccrualByDay,
  OzonFinanceAccrualCategory,
  OzonFinanceAccrualCommission,
  OzonFinanceAccrualDelivery,
  OzonFinanceAccrualItemFee,
  OzonFinanceAccrualPosting,
  OzonFinanceAccrualPostingProduct,
} from "./types.js";

const categorySchema: Schema<OzonFinanceAccrualCategory> = union([
  literal("UNSPECIFIED"),
  literal("POSTING"),
  literal("ITEM"),
  literal("NON_ITEM"),
  literal("CONTAINER_FEES"),
]);

const commissionSchema: Schema<OzonFinanceAccrualCommission> = object({
  bonus: accrualMoneySchema.optional(),
  coinvestment: accrualMoneySchema.optional(),
  commission: accrualMoneySchema.optional(),
  commission_ratio: string().optional(),
  sale_amount: accrualMoneySchema.optional(),
  sale_commission: accrualMoneySchema.optional(),
  sale_price: accrualMoneySchema.optional(),
  seller_price: union([accrualMoneySchema, literal(null)]).optional(),
});

const deliverySchema: Schema<OzonFinanceAccrualDelivery> = object({
  services: array(accrualFeeSchema).optional(),
  total_accrued: accrualMoneySchema.optional(),
});

const postingProductSchema: Schema<OzonFinanceAccrualPostingProduct> = object({
  commission: commissionSchema.optional(),
  delivery: deliverySchema.optional(),
  sku: integerSchema.optional(),
});

const postingSchema: Schema<OzonFinanceAccrualPosting> = object({
  delivery_schema: string().optional(),
  delivery_speed: integerSchema.optional(),
  products: array(postingProductSchema).optional(),
});

const itemFeeSchema: Schema<OzonFinanceAccrualItemFee> = object({
  fees: array(accrualFeeSchema).optional(),
  sku: integerSchema.optional(),
});

const accrualSchema: Schema<OzonFinanceAccrualByDay> = object({
  accrued_category: categorySchema.optional(),
  container_fees: object({
    fees: array(accrualFeeSchema).optional(),
  }).optional(),
  date: string().optional(),
  item_fees: union([
    object({ fees: array(itemFeeSchema).optional() }),
    literal(null),
  ]).optional(),
  non_item_fee: accrualFeeSchema.optional(),
  posting: union([postingSchema, literal(null)]).optional(),
  total_amount: accrualMoneySchema.optional(),
  accrual_id: integerSchema.optional(),
  unit_number: string().optional(),
});

export const getFinanceAccrualByDayV1ResponseSchema: Schema<GetFinanceAccrualByDayV1Response> =
  object({
    accruals: array(accrualSchema).optional(),
    last_id: string().optional(),
  });
