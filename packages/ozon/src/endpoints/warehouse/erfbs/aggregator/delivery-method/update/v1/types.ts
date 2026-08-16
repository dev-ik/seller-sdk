import type {
  OzonErfbsConfiguredReturnMethod,
  OzonErfbsDeliveryCosts,
  OzonErfbsReturnSettings,
} from "../../../../shared/v1/types.js";
import type { OzonWarehouseOperationResponse } from "../../../../../operation/shared/types.js";

export interface UpdateErfbsAggregatorDeliveryMethodV1Request {
  /**
   * Комментарий для курьера.
   *
   * Максимальная длина: `3000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly courier_comment?: string;

  /**
   * `true`, если номер телефона курьера совпадает с номером телефона склада. Если
   * `is_courier_phone_same_as_warehouse = true`, текущий номер телефона будет указан в
   * `courier_phones`.
   *
   * Пример: `true`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_courier_phone_same_as_warehouse?: boolean;

  /**
   * Номера телефонов для связи с курьером.
   *
   * Максимум элементов: `3`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly courier_phones?: readonly string[];

  /**
   * Время сборки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cut_in?: 15 | 30 | 60 | 120 | 180 | 240 | 300 | 360 | 420 | 480;

  /**
   * `true`, если доставка Ozon Express в пункт выдачи Ozon.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly deliver_to_pvz?: boolean;

  /**
   * Расходы на доставку, которые вы готовы оплатить.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_costs?: OzonErfbsDeliveryCosts;

  /**
   * Идентификатор метода доставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id: number;

  /**
   * Название метода доставки.
   *
   * Максимальная длина: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name?: string;

  /**
   * Настройки возвратов от покупателей.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly return_settings?: OzonErfbsReturnSettings<OzonErfbsConfiguredReturnMethod>;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export type UpdateErfbsAggregatorDeliveryMethodV1Response =
  OzonWarehouseOperationResponse;
