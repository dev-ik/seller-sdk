import type { OzonNotificationCheckErrorType } from "../../shared/v1/types.js";

export interface CheckNotificationV1Request {
  /**
   * URL-адрес.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly url: string;
}

export interface CheckNotificationV1Response {
  readonly errors?: readonly {
    readonly description?: string;
    readonly type?: OzonNotificationCheckErrorType;
  }[];
  readonly is_active: boolean;
}
