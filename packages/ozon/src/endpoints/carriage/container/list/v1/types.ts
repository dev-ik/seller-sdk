import type { OzonCarriageContainerSummary } from "../../shared/v1/types.js";

export type OzonCarriageContainerSortDirection = "ASC" | "DESC";

export interface ListCarriageContainersV1Request {
  /**
   * Указатель для выборки следующих данных.
   *
   * Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Фильтр.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: {
    /**
     * Тип грузоместа: - `box` — коробка; - `pallet` — палета.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly cargo_type?: string;

    /**
     * Дата начала периода создания грузоместа.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly created_from: string;

    /**
     * Дата окончания периода создания грузоместа.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly created_to: string;

    /**
     * Тип сортировки грузоместа: - `sort` — сортируемый; - `non-sort` — несортируемый.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly sort_type: string;

    /**
     * Статус грузоместа: - `new` — создано, но не подтверждено; - `formed` — подтверждено; -
     * `acceptance_in_progress` — началась приёмка в СЦ; - `cancelled` — расформировано из-за непривоза
     * или отмены продавцом; - `finished` — расформировано на СЦ; - `approve_enqueued` — система
     * поставила задачу на подтверждение состава грузоместа; - `approve_in_process` — подтверждение
     * состава грузоместа в процессе; - `approved` — состав грузоместа подтверждён; - `approve_failed`
     * — не удалось подтвердить состав грузоместа, оно осталось пустым; - `added` — добавлено на
     * палету; - `cancellation_enqueded` — система поставила задачу на отмену грузоместа.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly statuses?: readonly string[];

    /**
     * Идентификатор склада продавца.
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly warehouse_id?: number;
  };

  /**
   * Количество значений в ответе. Значение по умолчанию — 100.
   *
   * Формат: `int64`. Минимум: `1`. Максимум: `300`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit?: number;

  /**
   * Направление сортировки: - `ASC` — по возрастанию; - `DESC` — по убыванию.
   *
   * Пример: `ASC`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: OzonCarriageContainerSortDirection;
}

export interface ListCarriageContainersV1Response {
  readonly containers?: readonly OzonCarriageContainerSummary[];
  readonly cursor?: string;
}
