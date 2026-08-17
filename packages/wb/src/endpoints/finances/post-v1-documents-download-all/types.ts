// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить документы».
 *
 * Метод загружает несколько документов из [списка документов продавца](/openapi/financial-reports-and-accounting#tag/documents/operation/getV1DocumentsList).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 5 мин | 1 запрос | 5 мин | 5 запросов |
 * | Сервисный | 5 мин | 1 запрос | 5 мин | 5 запросов |
 * | Базовый с секретом | 5 мин | 1 запрос | 5 мин | 5 запросов |
 * | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
 *
 * POST /api/v1/documents/download/all
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/finances
 */
export type PostV1DocumentsDownloadAllInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 50.
     */
    readonly params?: readonly {
      /**
       * Формат документа
       */
      readonly extension?: string;

      /**
       * Уникальный ID документа
       */
      readonly serviceName?: string;
    }[];
  };
};
/**
 * Успешный ответ метода «Получить документы».
 *
 * 200: Успешно.
 */
export type PostV1DocumentsDownloadAllResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * Название документа
     *
     * Пример: `"documents.zip"`.
     */
    readonly fileName?: string;

    /**
     * Формат документа
     *
     * Пример: `"zip"`.
     */
    readonly extension?: string;

    /**
     * Документ в кодировке base64
     *
     * Пример: `"UEsDBBQACAgIAAAAAAAAAAAAAAAAAAAAAABHAAAA0KPQstC10LTQvtC80LvQtdC90LjQtSDQviDQstGL0LrRg9C/0LUg4oSWNDQ4NDE5NDEg0L7RgiAyNS4wOS4yMDIzLnhsc3jsnQk0lP3f/0dEUiRkNwmVECI7o0WS7EklxprdkH2bKVkqISRkGSlkaxRlN2TPnmzJvu/Gzmz/Uz33fY/L8/Q8zrn/x/07565zcjrn9f1cn/V6f69v53zTVCWnYATtA+0DAX/Rg0AgM5ip5l2Yg5OwKeyu+Wl3O1vbcA3YV5FDVfPej2vXKptOK1V9LjycmPDG72uW4vcG9xdsOI1V2wj86sk6+4nHJeZ92NFgC/He3gmDlccFXSyumXYUGSKK4hLLsqu5aBTspu5lqlcGB/JNlQVn1Eumj6o8ZEWPRotEVGkH9/kf457totEKj2N2P4dSZWAIaC0ajy5J+VL5fen1YOhcGMxvvUw+XOKFOHL...LSL/tC77s0GzTi2iBuHorbMpcOaw0Hmsc/gpk7ty3/cdDYRmhkRUPAIC37P94CA8oiP/fIvpPK8n9l43YARWRgH/tI6E3ntD/nfOfPyj9jxxDwn+b8/8dZqBDQPjPNSAACJgBAAD21P9s/y8AAP//UEsHCFHrudyQEwAASxQAAFBLAQIUABQACAgIAAAAAACH4v2BaSgAAGNjAABHAAAAAAAAAAAAAAAAAAAAAADQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INCy0YvQutGD0L/QtSDihJY0NDg0MTk0MSDQvtGCIDI1LjA5LjIwMjMueGxzeFBLAQIUABQACAgIAAAAAADTmLxwRQcAAGAPAABLAAAAAAAAAAAAAAAAAN4oAADQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INCy0YvQutGD0L/QtSDihJY0NDg0MTk0MSDQvtGCIDI1LjA5LjIwMjMueGxzeC5zaWdQSwECFAAUAAgACAAAAAAAUeu53JATAABLFAAACAAAAAAAAAAAAAAAAACcMAAAbWNoZC56aXBQSwUGAAAAAAMAAwAkAQAAYkQAAAAA"`.
     */
    readonly document?: string;
  };
};
