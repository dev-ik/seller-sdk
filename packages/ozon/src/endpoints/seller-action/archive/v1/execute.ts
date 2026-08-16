import type { Transport } from "#internal-core";
import type { OzonRequestOptions } from "../../../../request-options.js";
import { executeSellerActionVoid } from "../../shared/v1/execute.js";
import type {
  ArchiveSellerActionV1Request,
  ArchiveSellerActionV1Response,
} from "./types.js";
export const ARCHIVE_SELLER_ACTION_V1_OPERATION_ID = "SellerActionsArchive";
export function executeArchiveSellerActionV1(
  transport: Transport,
  input: ArchiveSellerActionV1Request,
  options: OzonRequestOptions = {},
): Promise<ArchiveSellerActionV1Response> {
  return executeSellerActionVoid(
    transport,
    ARCHIVE_SELLER_ACTION_V1_OPERATION_ID,
    "/v1/seller-actions/archive",
    input,
    options,
  );
}
