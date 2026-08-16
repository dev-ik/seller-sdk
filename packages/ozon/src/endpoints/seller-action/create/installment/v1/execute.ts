import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { sellerActionCreatedResponseSchema } from "../../../shared/v1/contract.js";
import type {
  CreateSellerInstallmentActionV1Request,
  CreateSellerInstallmentActionV1Response,
} from "./types.js";

export const CREATE_SELLER_INSTALLMENT_ACTION_V1_OPERATION_ID =
  "SellerActionsCreateInstallment";

export async function executeCreateSellerInstallmentActionV1(
  transport: Transport,
  input: CreateSellerInstallmentActionV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateSellerInstallmentActionV1Response> {
  const response = await transport.request({
    operationId: CREATE_SELLER_INSTALLMENT_ACTION_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/create/installment",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    sellerActionCreatedResponseSchema,
    response.body,
    CREATE_SELLER_INSTALLMENT_ACTION_V1_OPERATION_ID,
  );
}
