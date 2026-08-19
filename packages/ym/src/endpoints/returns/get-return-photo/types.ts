// Generated public types for this Yandex Market endpoint.
/**
 * Параметры метода «Получение фотографий товаров в возврате».
 *
 * Получает фотографии товаров, которые покупатель приложил к заявлению на возврат.
 *
 * Хеш изображения (`imageHash`) можно получить из ответов методов [GET v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}](../../reference/returns/getReturn.md) и [GET v2/campaigns/{campaignId}/returns](../../reference/returns/getReturns.md) — в поле `images` решения по товару.
 *
 * Максимальный размер изображения — 50 МБ.
 *
 * Тип изображения можно определить по заголовку `Content-Type` в ответе.
 *
 * GET /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/{itemId}/image/{imageHash}
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetReturnPhotoInput = {
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
     * Идентификатор заказа.
     *
     * Формат: `int64`.
     */
    readonly orderId: number;

    /**
     * Идентификатор невыкупа или возврата.
     *
     * Формат: `int64`.
     */
    readonly returnId: number;

    /**
     * Идентификатор товара в возврате.
     *
     * Формат: `int64`.
     */
    readonly itemId: number;

    /**
     * Хеш ссылки изображения для загрузки.
     */
    readonly imageHash: string;
  };
};
/**
 * Успешный ответ метода «Получение фотографий товаров в возврате».
 *
 * 200: Фотография товаров.
 */
export type GetReturnPhotoResponse = ArrayBuffer;
