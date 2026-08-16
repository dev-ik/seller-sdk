import type { OzonCargoTransportBindError } from "../../../shared/v1/types.js";
interface BindTransportCargoesV1RequestBase {
  /**
   * Идентификатор поставки. Получите значение параметра методом
   * [/v3/supply-order/get](#operation/SupplyOrderGet).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: number;
}

export type BindTransportCargoesV1Request =
  | (BindTransportCargoesV1RequestBase & {
      /**
       * Идентификаторы транспортных грузомест, которые надо отвязать.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly cargoes_unbind_transport_cargoes: readonly string[];
      readonly transport_cargo_bind?: never;
    })
  | (BindTransportCargoesV1RequestBase & {
      readonly cargoes_unbind_transport_cargoes?: never;
      /**
       * Идентификаторы грузомест и транспортных грузомест, которые надо связать.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly transport_cargo_bind: readonly {
        /**
         * Идентификаторы грузомест.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly cargo_ids: readonly string[];

        /**
         * Идентификатор транспортного грузоместа.
         *
         * Формат: `int64`.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly transport_cargo_id: number;
      }[];
    });
export interface BindTransportCargoesV1Response {
  readonly error_reasons?: readonly OzonCargoTransportBindError[];
  readonly operation_id?: string;
}
