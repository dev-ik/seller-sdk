import type { Schema } from "@safe-shape/core";
import { reviewDetailsV1Schema } from "../../shared/contract.js";
import type { GetReviewInfoV1Response } from "./types.js";

export const getReviewInfoV1ResponseSchema: Schema<GetReviewInfoV1Response> =
  reviewDetailsV1Schema;
