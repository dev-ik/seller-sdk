// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список рекомендаций в карточках товаров».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену,
 *  Сервисному токену
 *
 * Метод возвращает список [рекомендаций](https://seller.wildberries.ru/recommendations-v3) в карточках товаров.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 100 запросов | 600 мс | 5 запросов |
 *
 * POST /api/content/v1/recommendations/list
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostV1RecommendationsListInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * Бренды
     *
     * Пример: `["Comma"]`.
     *
     * Максимальное количество элементов: 30.
     */
    readonly brandNames?: readonly string[];

    /**
     * Количество товаров в ответе
     *
     * Значение по умолчанию: `20`.
     *
     * Минимальное значение: 0.
     *
     * Максимальное значение: 5000.
     */
    readonly limit?: number;

    /**
     * Курсор. Последний `nmId` в ответе
     *
     * Пример: `123`.
     *
     * Значение по умолчанию: `0`.
     */
    readonly next?: number;

    /**
     * Поиск:
     *  - по артикулу WB `nmId` — полное совпадение
     *  - по артикулу продавца `vendorCode` — частичное совпадение
     *
     * Пример: `"410"`.
     *
     * Максимальная длина: 72.
     */
    readonly search?: string;

    /**
     * ID предметов
     *
     * Пример: `[123,5231]`.
     *
     * Максимальное количество элементов: 30.
     */
    readonly subjectIds?: readonly number[];
  };
};
/**
 * Успешный ответ метода «Список рекомендаций в карточках товаров».
 *
 * 200: Успешно.
 */
export type PostV1RecommendationsListResponse = {
  /**
   * Данные о товарах и их рекомендациях
   */
  readonly data: readonly {
    /**
     * Артикул WB
     *
     * Пример: `5870243`.
     */
    readonly nmId: number;

    /**
     * ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
     *
     * Пример: `619043112`.
     */
    readonly imtId: number;

    /**
     * Артикул продавца
     *
     * Пример: `"41058/transparent"`.
     */
    readonly vendorCode: string;

    /**
     * Бренд
     *
     * Пример: `"Comma"`.
     */
    readonly brandName: string;

    /**
     * Дата и время последнего обновления рекомендаций
     *
     * Формат: `date-time`.
     *
     * Пример: `"2025-11-13T12:56:15.778591Z"`.
     */
    readonly updatedAt?: string | null;

    /**
     * Количество изображений в карточке товара
     *
     * Пример: `4`.
     */
    readonly picsCount: number;

    /**
     * Название товара
     *
     * Пример: `"Transparent phone case"`.
     */
    readonly title: string;

    /**
     * Предмет
     *
     * Пример: `"Phone cases"`.
     */
    readonly subjectName: string;

    /**
     * URL основного изображения в карточке товара
     *
     * Пример: `"https://basket-01.wbbasket.ru/vol58/part5870/5870243/images/c516x688/1.webp"`.
     */
    readonly pic: string;

    /**
     * Количество рекомендуемых товаров
     *
     * Пример: `2`.
     */
    readonly recomCount: number;

    /**
     * Список URL основных изображений рекомендуемых товаров
     *
     * Пример: `["https://basket-02.wbbasket.ru/vol174/part17405/17405826/images/tm/1.webp","https://basket-02.wbbasket.ru/vol174/part17420/17420062/images/tm/1.webp"]`.
     */
    readonly recomPics: readonly string[];

    /**
     * Список `nmId` рекомендуемых товаров
     *
     * Пример: `[17405826,17420062]`.
     */
    readonly recomNms: readonly number[];
  }[];

  /**
   * Курсор. Последний `nmId` в ответе
   *
   * Пример: `143`.
   */
  readonly next: number;
};
