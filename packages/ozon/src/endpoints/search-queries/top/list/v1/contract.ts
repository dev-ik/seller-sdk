import type { Schema } from "@safe-shape/core";
import { searchQueriesResponseSchema } from "../../../shared/v1/contract.js";
import type { ListTopSearchQueriesV1Response } from "./types.js";

export const listTopSearchQueriesV1ResponseSchema: Schema<ListTopSearchQueriesV1Response> =
  searchQueriesResponseSchema;
