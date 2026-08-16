import type { OzonNotificationType } from "../../shared/v1/types.js";

export interface OzonNotificationRegistration {
  readonly created_at: string;
  readonly enable: boolean;
  readonly id: number;
  readonly types: readonly {
    readonly description: string;
    readonly type: OzonNotificationType;
  }[];
  readonly url: string;
}

export interface ListNotificationsV1Response {
  readonly urls: readonly OzonNotificationRegistration[];
}
