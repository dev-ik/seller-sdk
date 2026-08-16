import { array, object, type Schema } from "@safe-shape/core";
import { cargoRulesCheckSchema } from "../../../shared/contract.js";
import type { GetSupplyCargoesRulesResponse } from "./types.js";
export const getSupplyCargoesRulesResponseSchema: Schema<GetSupplyCargoesRulesResponse> =
  object({ supply_check_lists: array(cargoRulesCheckSchema).optional() });
