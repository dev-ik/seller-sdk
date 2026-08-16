export interface GetCarriageContainerStatusesV1Request {
  /**
   * Идентификаторы грузомест.
   *
   * Минимум: `1`. Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly container_ids: readonly string[];
}

export interface GetCarriageContainerStatusesV1Response {
  readonly containers?: readonly {
    readonly container_id?: number;
    readonly status?: string;
  }[];
}
