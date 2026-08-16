import { object, type Schema } from "@safe-shape/core";
import { searchQueriesResponseShape } from "../../../shared/v1/contract.js";
import type { ListSearchQueriesByTextV1Response } from "./types.js";

export const listSearchQueriesByTextV1ResponseSchema: Schema<ListSearchQueriesByTextV1Response> =
  object(searchQueriesResponseShape);
