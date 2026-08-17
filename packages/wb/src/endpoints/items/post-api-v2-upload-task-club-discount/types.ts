// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Установить скидки WB Клуба».
 *
 * Устанавливает скидки для товаров в рамках подписки [WB Клуб](https://seller.wildberries.ru/help-center/article/A-337).
 *
 *  Получить информацию о процессе установки цен и скидок можно с помощью методов состояния (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1tasks/get) и детализации (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1goods~1task/get) обработанной загрузки.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
 *
 * POST /api/v2/upload/task/club-discount
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostApiV2UploadTaskClubDiscountInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly data: readonly {
      /**
       * Артикул WB
       *
       * Пример: `123`.
       */
      readonly nmID: number;

      /**
       * Скидка WB Клуба, %
       *
       * Пример: `5`.
       */
      readonly clubDiscount: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Установить скидки WB Клуба».
 *
 * 200: Успешно.
 *
 * 208: Такая загрузка уже есть.
 */
export type PostApiV2UploadTaskClubDiscountResponse =
  | {
      /**
       * Данные ответа
       */
      readonly data?: {
        /**
         * ID загрузки
         */
        readonly id?: number;

        /**
         * Флаг дублирования загрузки: `true` — такая загрузка уже есть
         *
         * Пример: `false`.
         */
        readonly alreadyExists?: boolean;
      };

      /**
       * Флаг ошибки
       *
       * Пример: `false`.
       */
      readonly error?: boolean;

      /**
       * Текст ошибки
       *
       * Пример: `""`.
       */
      readonly errorText?: string;
    }
  | {
      /**
       * Данные ответа
       */
      readonly data?: {
        /**
         * ID загрузки
         */
        readonly id?: number;

        /**
         * Флаг дублирования загрузки: `true` — такая загрузка уже есть
         */
        readonly alreadyExists?: boolean;
      };

      /**
       * Флаг ошибки
       */
      readonly error?: boolean;

      /**
       * Текст ошибки
       */
      readonly errorText?: string;
    };
