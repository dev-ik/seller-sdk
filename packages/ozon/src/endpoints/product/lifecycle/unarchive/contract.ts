import type { Schema } from "@safe-shape/core";
import { productLifecycleBooleanResponseSchema } from "../shared/contract.js";
import type { UnarchiveProductsResponse } from "./types.js";

export const unarchiveProductsResponseSchema: Schema<UnarchiveProductsResponse> =
  productLifecycleBooleanResponseSchema;
