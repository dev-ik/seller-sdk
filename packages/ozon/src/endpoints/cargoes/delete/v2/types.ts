import type { OzonCargoDeleteErrors } from "../shared/v2/types.js";
interface DeleteCargoesV2RequestBase {
  /**
   * Идентификатор поставки. Получите значение параметра методом
   * [/v3/supply-order/get](#operation/SupplyOrderGet).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: number;

  /**
   * Тип удаления транспортного грузоместа: - `UNBIND_CONTAINED_CARGOES` — удалить только
   * транспортное грузоместо и отвязать от него все грузоместа; - `DELETE_CONTAINED_CARGOES` —
   * удалить транспортное грузоместо вместе с грузоместами.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly transport_cargo_deletion_type:
    | "UNBIND_CONTAINED_CARGOES"
    | "DELETE_CONTAINED_CARGOES";
}

export type DeleteCargoesV2Request =
  | (DeleteCargoesV2RequestBase & {
      /**
       * Список идентификаторов грузомест, которые нужно удалить.
       *
       * Максимум: `1500`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly cargo_ids: readonly string[];
      readonly transport_cargo_ids?: never;
    })
  | (DeleteCargoesV2RequestBase & {
      readonly cargo_ids?: never;
      /**
       * Список идентификаторов транспортных грузомест, которые нужно удалить.
       *
       * Максимум: `40`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly transport_cargo_ids: readonly string[];
    });
export interface DeleteCargoesV2Response {
  readonly errors?: OzonCargoDeleteErrors;
  readonly operation_id?: string;
}
