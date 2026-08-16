import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { checkDeliveryAvailabilityV1ResponseSchema } from "./contract.js";
import type {
  CheckDeliveryAvailabilityV1Request,
  CheckDeliveryAvailabilityV1Response,
} from "./types.js";

export const CHECK_DELIVERY_AVAILABILITY_V1_OPERATION_ID = "DeliveryCheck";

export async function executeCheckDeliveryAvailabilityV1(
  transport: Transport,
  input: CheckDeliveryAvailabilityV1Request,
  options: OzonRequestOptions = {},
): Promise<CheckDeliveryAvailabilityV1Response> {
  const response = await transport.request({
    operationId: CHECK_DELIVERY_AVAILABILITY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/delivery/check",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    checkDeliveryAvailabilityV1ResponseSchema,
    response.body,
    CHECK_DELIVERY_AVAILABILITY_V1_OPERATION_ID,
  );
}
