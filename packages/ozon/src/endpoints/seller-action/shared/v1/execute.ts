import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";

export async function executeSellerActionVoid(
  transport: Transport,
  operationId: string,
  path: string,
  body: unknown,
  options: OzonRequestOptions,
): Promise<void> {
  await transport.request({
    operationId,
    method: "POST",
    path,
    body,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
