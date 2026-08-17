// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Объединение и разъединение карточек товаров».
 *
 * Метод [объединяет и разъединяет](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточки товаров. Карточки товаров являются объединёнными, если у них одинаковый `imtID`.
 *
 * Для объединения карточек товаров сделайте запрос **с указанием** `imtID`. Можно объединять не более 30 карточек товаров.
 *
 * Для разъединения карточек товаров сделайте запрос **без указания** `imtID`. Для разъединенных карточек будут сгенерированы новые `imtID`.
 *
 * Если вы разъедините одновременно несколько карточек товаров, эти карточки объединятся в одну и получат новый `imtID`.
 *
 * Чтобы присвоить каждой карточке товара уникальный `imtID`, необходимо передавать по одной карточке товара за запрос.
 *
 * Максимальный размер запроса 10 Мб.
 *
 *  Объединить можно карточки товаров только в рамках одного предмета
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Контент:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 100 запросов | 600 мс | 5 запросов |
 *
 * Исключение — методы:
 *
 *  создания карточек товаров (/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload/post)
 *  создания карточек товаров с присоединением (/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload~1add/post)
 *  редактирования карточек товаров (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1update/post)
 *  восстановления карточек товаров из корзины (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1recover/post)
 *  получения списка рекомендаций в карточках товаров (/openapi/work-with-products#tag/recommendations/operation/postV1RecommendationsList)
 *  установки рекомендаций для товаров (/openapi/work-with-products#tag/recommendations/operation/postV1RecommendationsSet)
 *
 * POST /content/v2/cards/moveNm
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostContentV2CardsMoveNmInput = {
  /**
   * Тело запроса.
   */
  readonly body?:
    | {
        /**
         * Существующий `imtID`, под которым необходимо [объединить](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточки товаров
         *
         * Пример: `123`.
         */
        readonly targetIMT: number;

        /**
         * `nmID`, которые необходимо объединить
         *
         * Пример: `[837459235,828572090]`.
         */
        readonly nmIDs: readonly number[];
      }
    | {
        /**
         * `nmID`, которые необходимо разъединить
         *
         * Пример: `[837459235,828572090]`.
         */
        readonly nmIDs: readonly number[];
      };
};
/**
 * Успешный ответ метода «Объединение и разъединение карточек товаров».
 *
 * 200: Успешно.
 */
export type PostContentV2CardsMoveNmResponse = {
  /**
   * Данные ответа
   *
   * Пример: `null`.
   */
  readonly data?: Readonly<Record<string, never>> | null;

  /**
   * Флаг ошибки
   */
  readonly error?: boolean;

  /**
   * Описание ошибки
   */
  readonly errorText?: string;

  /**
   * Дополнительные ошибки
   */
  readonly additionalErrors?:
    | {
        /** Описание отсутствует в OpenAPI WB. */ readonly string?: string;
      }
    | null
    | string
    | null
    | {
        /** Описание отсутствует в OpenAPI WB. */ readonly error: string;
      };
};
