// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Управление ярлыками в карточке товара».
 *
 * Метод добавляет или снимает ярлык с карточки товара. К карточке можно добавить максимум 15 ярлыков.
 *
 * При удалении ярлыка из карточки товара он не удаляется из [списка ярлыков](/openapi/work-with-products#tag/labels/paths/~1content~1v2~1tags/get) продавца.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов Ярлыков:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * POST /content/v2/tag/nomenclature/link
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostContentV2TagNomenclatureLinkInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Артикул WB
     */
    readonly nmID?: number;

    /**
     * Массив числовых ID ярлыков.
     *
     * Что бы снять ярлыки с карточки товара, необходимо передать пустой массив.
     *
     * Чтобы добавить ярлыки к уже имеющимся в карточке товара, необходимо в запросе передать новые ярлыки и ярлыки, которые уже есть в карточке товара.
     */
    readonly tagsIDs?: readonly number[];
  };
};
/**
 * Успешный ответ метода «Управление ярлыками в карточке товара».
 *
 * 200: Успешно.
 */
export type PostContentV2TagNomenclatureLinkResponse = {
  /**
   * Данные ошибки
   */
  readonly data?: Readonly<Record<string, never>> | null;

  /**
   * Флаг ошибки
   */
  readonly error?: boolean;

  /**
   * Текст ошибки
   */
  readonly errorText?: string;

  /**
   * Дополнительные ошибки
   */
  readonly additionalErrors?: string | null;
};
