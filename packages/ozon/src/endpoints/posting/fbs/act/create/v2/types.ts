export interface CreateFbsActRequest {
  /**
   * Количество грузовых мест. Используйте параметр, если вы подключены к доверительной приёмке и
   * отгружаете заказы грузовыми местами. Если вы не подключены к доверительной приёмке, пропустите
   * его. [Подробнее в Базе знаний
   * продавца](https://docs.ozon.ru/partners/prodayoa-so-svoego-sklada-fbs/doveritel-naya-priemka-gruzovogo-mesta)
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly containers_count?: number;

  /**
   * Идентификатор метода доставки. Для realFBS-складов получите его с помощью метода
   * [/v2/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodListV2). Для FBS-складов
   * используйте значение параметра `warehouse_id`. Его можно получить с помощью метода
   * [/v2/warehouse/list](#operation/WarehouseListV2).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id: number;

  /**
   * Дата отгрузки.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly departure_date?: string;
}
export interface CreateFbsActResponse {
  readonly result?: { readonly id?: number };
}
