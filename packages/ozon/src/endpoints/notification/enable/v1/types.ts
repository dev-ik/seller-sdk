export interface EnableNotificationV1Request {
  /**
   * Передайте: - `true` — чтобы включить уведомления; - `false` — чтобы выключить уведомления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly enabled: boolean;

  /**
   * Идентификатор URL-адреса.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id: number;
}

export type EnableNotificationV1Response = void;
