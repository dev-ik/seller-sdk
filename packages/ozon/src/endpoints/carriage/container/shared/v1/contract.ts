import { array, number, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import type {
  OzonCarriageContainerDetails,
  OzonCarriageContainerSummary,
  OzonCarriageContainerTaskResponse,
  OzonCarriagePostingTaskResponse,
} from "./types.js";

export const carriageContainerTaskResponseSchema: Schema<OzonCarriageContainerTaskResponse> =
  object({
    error_containers: array(
      object({
        container_id: integerSchema.optional(),
        error_message: string().optional(),
      }),
    ).optional(),
    task_id: integerSchema.optional(),
  });

export const carriagePostingTaskResponseSchema: Schema<OzonCarriagePostingTaskResponse> =
  object({
    error_postings: array(
      object({
        error_message: string().optional(),
        posting_number: string().optional(),
      }),
    ).optional(),
    task_id: integerSchema.optional(),
  });

export const carriageContainerSummarySchema: Schema<OzonCarriageContainerSummary> =
  object({
    available_actions: array(string()).optional(),
    cargo_type: string().optional(),
    container_id: integerSchema.optional(),
    container_number: integerSchema.optional(),
    count_of_postings: integerSchema.optional(),
    created_at: rfc3339DateTimeSchema.optional(),
    sort_type: string().optional(),
    status: string().optional(),
    warehouse_date: string().optional(),
    warehouse_id: integerSchema.optional(),
    warehouse_name: string().optional(),
    weight: number().optional(),
  });

export const carriageContainerDetailsSchema: Schema<OzonCarriageContainerDetails> =
  object({
    available_actions: array(string()).optional(),
    cargo_type: string().optional(),
    container_id: integerSchema.optional(),
    container_number: integerSchema.optional(),
    count_of_postings: integerSchema.optional(),
    created_at: rfc3339DateTimeSchema.optional(),
    parent_container_id: integerSchema.optional(),
    postings: array(
      object({
        available_actions: array(string()).optional(),
        in_process_at: rfc3339DateTimeSchema.optional(),
        posting_number: string().optional(),
        products: array(
          object({
            sku: integerSchema.optional(),
            name: string().optional(),
            offer_id: string().optional(),
            quantity: integerSchema.optional(),
            picture_url: string().optional(),
            product_color: string().optional(),
            product_size_manufacturer: string().optional(),
            product_size_russian: string().optional(),
          }),
        ).optional(),
        sort_type: string().optional(),
        weight: number().optional(),
      }),
    ).optional(),
    related_container_ids: array(string()).optional(),
    sort_type: string().optional(),
    status: string().optional(),
    warehouse_date: string().optional(),
    warehouse_id: integerSchema.optional(),
    warehouse_name: string().optional(),
    weight: number().optional(),
  });
