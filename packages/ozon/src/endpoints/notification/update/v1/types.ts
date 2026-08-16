import type { OzonNotificationType } from "../../shared/v1/types.js";

export interface UpdateNotificationV1Request {
  /**
   * Идентификатор URL-адреса.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id: number;

  /**
   * Типы уведомлений: - `TYPE_NEW_MESSAGE` — новое сообщение в чате; - `TYPE_UPDATE_MESSAGE` —
   * изменение сообщения в чате; - `TYPE_MESSAGE_READ` — ваше сообщение прочитано покупателем или
   * поддержкой; - `TYPE_CHAT_CLOSED` — чат закрыт; - `TYPE_NEW_POSTING` — новое отправление; -
   * `TYPE_POSTING_CANCELLED` — отмена отправления; - `TYPE_STATE_CHANGED` — изменение статуса
   * отправления; - `TYPE_DELIVERY_DATE_CHANGED` — изменение даты доставки отправления; -
   * `TYPE_CUTOFF_DATE_CHANGED` — изменение даты отгрузки отправления; - `TYPE_CREATE_ITEM` —
   * создание товара или ошибка при его создании; - `TYPE_UPDATE_ITEM` — обновление товара или ошибка
   * при обновлении; - `TYPE_CREATE_OR_UPDATE_ITEM` — создание и…
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly types?: readonly OzonNotificationType[];

  /**
   * Новый URL-адрес.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly url?: string;
}

export type UpdateNotificationV1Response = void;
