// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Установить оптовые скидки для B2B-продаж».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену,
 *  Сервисному токену
 *
 * Метод устанавливает [оптовые скидки для бизнеса](https://seller.wildberries.ru/instructions/ru/ru/material/how-to-enable-wholesale-discounts-for-business)
 *
 *  Получить информацию о процессе установки цен и скидок можно с помощью методов состояния (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1tasks/get) и детализации (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1goods~1task/get) обработанной загрузки.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 *
 * POST /api/discounts-prices/v1/upload/task/b2b/wholesale
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostV1UploadTaskB2bWholesaleInput = {
  /**
   * Установка оптовых скидок для B2B
   */
  readonly body: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly data: readonly {
      /**
       * Артикул WB
       *
       * Пример: `694707813`.
       */
      readonly nmId: number;

      /**
       * Оптовые скидки разных уровней для B2B
       */
      readonly wholesaleDiscountThreshold: readonly {
        /**
         * Минимальное количество единиц товара для скидки
         *
         * Пример: `10`.
         */
        readonly minQuantity: number;

        /**
         * Скидка, %.
         * Чтобы удалить скидку, укажите `0`. Такой запрос одновременно удалит скидки на этом уровне и на всех более высоких уровнях `level` — вне зависимости от указания их в запросе
         *
         * Пример: `10`.
         */
        readonly wholesaleDiscount: number;

        /**
         * Уровень скидки
         *
         * Пример: `1`.
         */
        readonly level: number;
      }[];
    }[];
  };
};
/**
 * Успешный ответ метода «Установить оптовые скидки для B2B-продаж».
 *
 * 200: Успешно.
 *
 * 208: Такая загрузка уже есть.
 */
export type PostV1UploadTaskB2bWholesaleResponse =
  | {
      /**
       * ID загрузки
       */
      readonly id: number;

      /**
       * Дублирование загрузки: `true` — такая загрузка уже есть
       *
       * Пример: `false`.
       */
      readonly alreadyExists: boolean;

      /**
       * Результаты обработки запроса
       */
      readonly results: readonly {
        /**
         * Артикул WB
         *
         * Пример: `1`.
         */
        readonly nmId: number;

        /**
         * Успешна ли установка скидки на товар:
         *  - `false` — неуспешна
         *  - `true` — успешна
         *
         * Пример: `false`.
         */
        readonly success: boolean;

        /**
         * Ошибка. При `"success":false`
         */
        readonly error?: {
          /**
           * HTTP статус-код
           *
           * Пример: `400`.
           */
          readonly status: number;

          /**
           * Заголовок ошибки
           *
           * Пример: `"Bad Request"`.
           */
          readonly title: string;

          /**
           * Детали ошибки
           *
           * Пример: `"Number of items must increase with each level"`.
           */
          readonly detail: string;
        };
      }[];
    }
  | {
      /**
       * HTTP статус-код
       *
       * Пример: `208`.
       */
      readonly status: number;

      /**
       * Заголовок ответа
       *
       * Пример: `"Already Reported"`.
       */
      readonly title: string;

      /**
       * Детали ответа
       *
       * Пример: `"This task already exists"`.
       */
      readonly detail: string;

      /**
       * ID запроса
       *
       * Пример: `"4b387d2e-13b0-4be7-a34c-be01fb35fd2d"`.
       */
      readonly requestId: string;

      /**
       * ID внутреннего сервиса WB
       *
       * Пример: `"discounts-prices"`.
       */
      readonly origin: string;
    };
