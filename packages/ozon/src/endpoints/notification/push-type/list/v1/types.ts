import type { OzonNotificationType } from "../../../shared/v1/types.js";

export interface ListNotificationPushTypesV1Response {
  readonly types: readonly {
    readonly description: string;
    readonly seller_endpoint?: { readonly id: number; readonly url: string };
    readonly type: OzonNotificationType;
  }[];
}
