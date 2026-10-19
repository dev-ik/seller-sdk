import type { OzonNotificationType } from "../../shared/v1/types.js";

export interface OzonNotificationRegistration {
  readonly availability_status: string;
  readonly availability_status_date: string;
  readonly disable_reason: string;
  readonly problematic_type: string;
  readonly reason_details: string;
  readonly created_at: string;
  readonly enable: boolean;
  readonly id: number;
  readonly types: readonly {
    readonly description: string;
    readonly type: OzonNotificationType;
  }[];
  readonly url: string;
}

export interface ListNotificationsV1Response {
  readonly total_count: number;
  readonly availability_status_thresholds: readonly {
    readonly status: string;
    readonly threshold: number;
  }[];
  readonly urls: readonly OzonNotificationRegistration[];
}

export interface ListNotificationsV1Request {
  /**
   * Информация о доступности URL-адресов: - `GREEN` — активен; - `YELLOW` — нестабилен; - `RED` —
   * недоступен.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly availability_statuses?: readonly ("GREEN" | "YELLOW" | "RED")[];
  /**
   * Количество элементов в ответе.
   *
   * Формат: `uint64`. Пример: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit?: number;
  /**
   * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ
   * начнётся с 11-го найденного элемента.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset?: number;
  /**
   * Направление сортировки: - `ASC` — по возрастанию; - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: "ASC" | "DESC";
}
