export interface ApproveFbsCarriageRequest {
  /**
   * Идентификатор отгрузки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly carriage_id: number;

  /**
   * Количество грузовых мест. Используйте параметр, если вы подключены к доверительной приёмке и
   * отгружаете заказы грузовыми местами. Если вы не подключены к доверительной приёмке, пропустите
   * его.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly containers_count?: number;
}

export type ApproveFbsCarriageResponse = Readonly<Record<string, never>>;
