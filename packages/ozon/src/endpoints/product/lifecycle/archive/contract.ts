import type { Schema } from "@safe-shape/core";
import { productLifecycleBooleanResponseSchema } from "../shared/contract.js";
import type { ArchiveProductsResponse } from "./types.js";

export const archiveProductsResponseSchema: Schema<ArchiveProductsResponse> =
  productLifecycleBooleanResponseSchema;
