// Generated public types for this Yandex Market endpoint.
type OutletLicensesApiResponseStatusType = "OK" | "ERROR";
type OutletLicensesEmptyApiResponse = {
  readonly status: OutletLicensesApiResponseStatusType;
};

/**
 * Параметры метода «Удаление лицензий для точек продаж».
 *
 * Удаляет информацию о лицензиях для точек продаж.
 *
 * DELETE /v2/campaigns/{campaignId}/outlets/licenses
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type DeleteOutletLicensesInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.
     *
     * Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:
     *
     * * блок **Идентификатор кампании**;
     * * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.
     *
     * ⚠️ Не путайте его с:
     * - идентификатором магазина, который отображается в личном кабинете продавца;
     * - рекламными кампаниями.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly campaignId: number;
  } /**
   * Параметры строки запроса.
   */;
  readonly query: {
    /**
     * Список идентификаторов лицензий для удаления.
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 500.
     */
    readonly ids: readonly number[];
  };
};
/**
 * Успешный ответ метода «Удаление лицензий для точек продаж».
 *
 * 200: Пустой ответ.
 */
export type DeleteOutletLicensesResponse = OutletLicensesEmptyApiResponse;
