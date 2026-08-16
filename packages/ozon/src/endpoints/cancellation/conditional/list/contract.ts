import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { ListConditionalCancellationsResponse } from "./types.js";

const initiatorSchema = union([
  literal("OZON"),
  literal("SELLER"),
  literal("CLIENT"),
  literal("SYSTEM"),
  literal("DELIVERY"),
]);

const stateValueSchema = union([
  literal("ON_APPROVAL"),
  literal("APPROVED"),
  literal("REJECTED"),
]);

const reasonSchema = object({
  id: integerSchema.optional(),
  name: string().optional(),
});

const stateSchema = object({
  id: integerSchema.optional(),
  name: string().optional(),
  state: stateValueSchema.optional(),
});

const cancellationSchema = object({
  approve_comment: string().optional(),
  approve_date: rfc3339DateTimeSchema.optional(),
  auto_approve_date: rfc3339DateTimeSchema.optional(),
  cancellation_id: integerSchema.optional(),
  cancellation_initiator: initiatorSchema.optional(),
  cancellation_reason: reasonSchema.optional(),
  cancellation_reason_message: string().optional(),
  cancelled_at: rfc3339DateTimeSchema.optional(),
  order_date: rfc3339DateTimeSchema.optional(),
  posting_number: string().optional(),
  source_id: integerSchema.optional(),
  state: stateSchema.optional(),
  tpl_integration_type: string().optional(),
});

/** @internal */
export const listConditionalCancellationsResponseSchema: Schema<ListConditionalCancellationsResponse> =
  object({
    counter: integerSchema.optional(),
    last_id: integerSchema.optional(),
    result: array(cancellationSchema).optional(),
  });
