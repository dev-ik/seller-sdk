// Generated public types for this Yandex Market endpoint.
type OutletsApiResponseStatusType = "OK" | "ERROR";
type OutletsEmptyApiResponse = {
  readonly status: OutletsApiResponseStatusType;
};

/**
 * Параметры метода «Удаление точки продаж».
 *
 * Удаляет точку продаж магазина на Маркете.
 *
 * DELETE /v2/campaigns/{campaignId}/outlets/{outletId}
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type DeleteOutletInput = {
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

    /**
     * Идентификатор точки продаж.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly outletId: number;
  };
};
/**
 * Успешный ответ метода «Удаление точки продаж».
 *
 * 200: Пустой ответ.
 */
export type DeleteOutletResponse = OutletsEmptyApiResponse;
