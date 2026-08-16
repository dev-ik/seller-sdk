import type {
  OzonCargoCreateErrors,
  OzonCargoInput,
} from "../../shared/types.js";
export interface CreateSupplyCargoesRequest {
  /**
   * Информация о грузоместах. Вы можете передать не больше 40 палет или 30 коробок.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cargoes: readonly OzonCargoInput[];

  /**
   * Идентификатор поставки. Можно получить с помощью метода
   * [/v3/supply-order/get](#operation/SupplyOrderGet). Нужное значение — в параметре ответа
   * `orders.supplies.supply_id`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: number;

  /**
   * `true`, если нужно удалить предыдущие грузоместа.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delete_current_version?: boolean;
}
export interface CreateSupplyCargoesResponse {
  readonly operation_id?: string;
  readonly errors?: OzonCargoCreateErrors;
}
