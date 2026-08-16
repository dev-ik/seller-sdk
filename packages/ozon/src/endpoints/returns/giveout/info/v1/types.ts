import type {
  OzonGiveoutArticleV1,
  OzonGiveoutStatusV1,
} from "../../shared/types.js";
export interface GetGiveoutInfoV1Request {
  /**
   * Идентификатор отгрузки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly giveout_id: number;
}
export interface GetGiveoutInfoV1Response {
  readonly articles?: readonly OzonGiveoutArticleV1[];
  readonly giveout_id?: number;
  readonly giveout_status?: OzonGiveoutStatusV1;
  readonly warehouse_address?: string;
  readonly warehouse_name?: string;
}
