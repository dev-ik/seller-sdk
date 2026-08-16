import type { Transport } from "#internal-core";
import type { OzonRequestOptions } from "../../../../request-options.js";
import { executeSellerActionVoid } from "../../shared/v1/execute.js";
import type {
  ChangeSellerActionActivityV1Request,
  ChangeSellerActionActivityV1Response,
} from "./types.js";
export const CHANGE_SELLER_ACTION_ACTIVITY_V1_OPERATION_ID =
  "SellerActionsChangeActivity";
export function executeChangeSellerActionActivityV1(
  transport: Transport,
  input: ChangeSellerActionActivityV1Request,
  options: OzonRequestOptions = {},
): Promise<ChangeSellerActionActivityV1Response> {
  return executeSellerActionVoid(
    transport,
    CHANGE_SELLER_ACTION_ACTIVITY_V1_OPERATION_ID,
    "/v1/seller-actions/change-activity",
    input,
    options,
  );
}
