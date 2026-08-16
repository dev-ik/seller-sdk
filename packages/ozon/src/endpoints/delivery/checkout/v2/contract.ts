import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { deliveryDateRangeSchema } from "../../shared/v1/contract.js";
import type {
  CheckoutDeliveryV2Response,
  OzonDeliveryCheckoutMethod,
  OzonDeliveryCheckoutSplit,
  OzonDeliveryCheckoutTimeslot,
} from "./types.js";

const unavailableReasonSchema = union([
  literal("UNSPECIFIED"),
  literal("UNKNOWN"),
  literal("OUT_OF_STOCK"),
  literal("BANNED_FOR_AREA"),
  literal("BANNED_FOR_LEGAL"),
  literal("BANNED"),
  literal("BANNED_FOR_NOT_PREMIUM"),
  literal("DELIVERY_UNAVAILABLE"),
  literal("BANNED_FOR_INDIVIDUAL"),
  literal("INVALID_WEIGHT"),
  literal("INVALID_MULTIPLICITY"),
  literal("NOT_FOUND_POINTS_DARK_STORES"),
  literal("INVALID_MULTI_WAREHOUSES"),
  literal("MIN_PRICE"),
  literal("OZONE_DELIVERY_UNAVAILABLE"),
  literal("RFBS_DELIVERY_UNAVAILABLE"),
  literal("HACK_COURIER_TAGS"),
  literal("NO_SLA"),
  literal("DELIVERY_VARIANT_IS_CLOSING"),
  literal("TPL_NOT_INTEGRATED"),
  literal("NOT_ALL_WAREHOUSES_ARE_SERVED"),
  literal("DELIVERY_SLOTS_NOT_FOUND"),
  literal("NO_ROUTE"),
  literal("CAPACITY_LIMIT"),
  literal("PACKAGE_MAX_VOLUME_WEIGHT_RESTRICTION"),
  literal("PACKAGE_MAX_WEIGHT_RESTRICTION"),
  literal("MAX_COST_RESTRICTION"),
  literal("MIN_PACKAGE_WEIGHT_RESTRICTION"),
  literal("MIN_COST_RESTRICTION"),
  literal("MAX_DIMENSIONS_RESTRICTION"),
  literal("PRODUCT_TYPES_RESTRICTION"),
  literal("PRODUCT_TAGS_RESTRICTION"),
  literal("SELECTED_DELIVERY_METHOD_UNAVAILABLE"),
  literal("SELECTED_DELIVERY_TIMESLOT_UNAVAILABLE"),
  literal("MARKETPLACE_UNAVAILABLE"),
  literal("INVALID_PVZ_FOR_KGT"),
  literal("LEGAL_USER_PREMIUM_SPLIT"),
  literal("USER_ALREADY_HAS_PREMIUM"),
  literal("WAIT_FOR_PAY_SUBSCRIPTION"),
  literal("ADDRESS_NOT_SET"),
  literal("PICKUP_POINT_DISABLED"),
  literal("LEGAL_PREORDER"),
  literal("DELIVERY_TYPE_FOR_PREORDER"),
  literal("CROSS_BORDER_PICKUP"),
  literal("ORDER_CUSTOMS_TYPES"),
  literal("PACKAGE_MAX_COST"),
  literal("SUPER_ECONOM"),
  literal("ECONOM_NOT_FULL_QUANT"),
  literal("EMPTY_DELIVERY_METHODS"),
]);

const timeslotSchema: Schema<OzonDeliveryCheckoutTimeslot> = object({
  client_date_range: deliveryDateRangeSchema.optional(),
  logistic_date_range: deliveryDateRangeSchema.optional(),
  timeslot_id: integerSchema.optional(),
});

const methodSchema: Schema<OzonDeliveryCheckoutMethod> = object({
  delivery_time_zone_offset: integerSchema.optional(),
  delivery_type: union([
    literal("UNSPECIFIED"),
    literal("POSTAMAT"),
    literal("COURIER"),
    literal("PVZ"),
  ]).optional(),
  id: integerSchema.optional(),
  name: string().optional(),
  timeslots: array(timeslotSchema).optional(),
  unavailable_reason: unavailableReasonSchema.optional(),
  warehouse_time_zone_offset: integerSchema.optional(),
});

const itemSchema = object({
  offer_id: string().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
});

const commissionsSchema = object({
  total: object({
    amount: string().optional(),
    currency: string().optional(),
  }).optional(),
});

const splitSchema: Schema<OzonDeliveryCheckoutSplit> = object({
  commissions: union([commissionsSchema, literal(null)]).optional(),
  delivery_method: methodSchema.optional(),
  delivery_schema: union([
    literal("UNSPECIFIED"),
    literal("FBO"),
    literal("FBS"),
  ]).optional(),
  items: array(itemSchema).optional(),
  unavailable_reason: unavailableReasonSchema.optional(),
  warehouse_id: integerSchema.optional(),
});

export const checkoutDeliveryV2ResponseSchema: Schema<CheckoutDeliveryV2Response> =
  object({ splits: array(splitSchema).optional() });
