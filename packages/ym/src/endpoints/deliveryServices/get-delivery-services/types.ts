// Generated public types for this Yandex Market endpoint.
type DeliveryServicesDeliveryServiceInfoDTO = {
  readonly id: number;
  readonly name: string;
};
type DeliveryServicesDeliveryServicesDTO = {
  readonly deliveryService: readonly DeliveryServicesDeliveryServiceInfoDTO[];
};
type DeliveryServicesGetDeliveryServicesResponse = {
  readonly result?: DeliveryServicesDeliveryServicesDTO;
};

/**
 * Параметры метода «Справочник служб доставки».
 *
 * Возвращает справочник служб доставки: идентификаторы и наименования.
 *
 * GET /v2/delivery/services
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetDeliveryServicesInput = undefined;
/**
 * Успешный ответ метода «Справочник служб доставки».
 *
 * 200: Информация о службах доставки.
 */
export type GetDeliveryServicesResponse =
  DeliveryServicesGetDeliveryServicesResponse;
