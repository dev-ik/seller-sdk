import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { shipFbsPostingPackageV4ResponseSchema } from "./contract.js";
import type {
  ShipFbsPostingPackageV4Request,
  ShipFbsPostingPackageV4Response,
} from "./types.js";

export const SHIP_FBS_POSTING_PACKAGE_V4_OPERATION_ID =
  "PostingAPI_ShipFbsPostingPackage";

export async function executeShipFbsPostingPackageV4(
  transport: Transport,
  input: ShipFbsPostingPackageV4Request,
  options: OzonRequestOptions = {},
): Promise<ShipFbsPostingPackageV4Response> {
  const response = await transport.request({
    operationId: SHIP_FBS_POSTING_PACKAGE_V4_OPERATION_ID,
    method: "POST",
    path: "/v4/posting/fbs/ship/package",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    shipFbsPostingPackageV4ResponseSchema,
    response.body,
    SHIP_FBS_POSTING_PACKAGE_V4_OPERATION_ID,
  );
}
