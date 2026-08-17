// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Закрепить отзывы».
 *
 * Метод позволяет закрепить отзывы в карточке товара или в группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек.
 *
 * Чтобы получить ID отзывов, используйте метод [Список закреплённых и откреплённых отзывов](/openapi/user-communication#tag/pinnedFeedbacks/operation/getFeedbacksV1Pins).
 *
 * Метод доступен по [подписке Джем](https://seller.wildberries.ru/monetization/jam) или c [тарифной опцией](https://seller.wildberries.ru/tariff-constructor) **Закрепление отзыва**.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * POST /api/feedbacks/v1/pins
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type PostFeedbacksV1PinsInput = {
  /**
   * Тело запроса.
   *
   * Пример: `[{"pinMethod":"subscription","pinOn":"imt","feedbackId":"VlbkVVl7mtw37wуWkJZz"},{"pinMethod":"tariff","pinOn":"imt","feedbackId":"DibuRAImknLyiqgzvGcU"}]`.
   *
   * Максимальное количество элементов: 500.
   */
  readonly body: readonly {
    /**
     * Метод закрепления:
     *  - `subscription` — подписка Джем
     *  - `tariff` — тарифная опция
     *
     * Пример: `"subscription"`.
     */
    readonly pinMethod: "tariff" | "subscription";

    /**
     * Место закрепления отзыва:
     *  - `nm` — карточка товара
     *  - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
     *
     * Пример: `"imt"`.
     */
    readonly pinOn: "nm" | "imt";

    /**
     * ID отзыва
     *
     * Пример: `"DibuRAImknLyiqgzvGcU"`.
     */
    readonly feedbackId: string;
  }[];
};
/**
 * Успешный ответ метода «Закрепить отзывы».
 *
 * 200: Успешно.
 */
export type PostFeedbacksV1PinsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: readonly {
    /**
     * ID отзыва
     */
    readonly feedbackId: string;

    /**
     * ID операции закрепления. Если поле отсутствует — закрепить отзыв не удалось
     */
    readonly pinId?: number;

    /**
     * Метод закрепления:
     *  - `subscription` — подписка Джем
     *  - `tariff` — тарифная опция
     */
    readonly pinMethod: "tariff" | "subscription";

    /**
     * Место закрепления отзыва:
     *  - `nm` — карточка товара
     *  - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
     */
    readonly pinOn: "nm" | "imt";

    /**
     * Есть ли ошибки
     */
    readonly isErrors: boolean;

    /**
     * Детали ошибок
     *
     * Пример: `[{"status":"itemNotFound","title":"item not found","detail":"item not found or does not belong to seller","requestId":"0414dс48df701618e0а3bfc414fe3136","origin":"pin-open-api"}]`.
     */
    readonly errors?: readonly {
      /**
       * ID внутреннего сервиса WB
       */
      readonly origin: string;

      /**
       * Детали ошибки
       */
      readonly detail?: string;

      /**
       * ID запроса
       *
       * Пример: `"req-12345"`.
       */
      readonly requestId: string;

      /**
       * Статус
       *
       * Пример: `"feedbackNotFound"`.
       */
      readonly status:
        | "feedbackNotFound"
        | "itemNotFound"
        | "feedbackMismatch"
        | "itemNoImages"
        | "feedbackExcluded"
        | "imtNotDisplayed"
        | "globalLimitReached"
        | "unitLimitReached"
        | "tariffRestriction"
        | "subscriptionRestriction"
        | "alreadyPinned"
        | "bodyNotValid";

      /**
       * Заголовок ошибки
       *
       * Пример: `"feedbackNotFound"`.
       */
      readonly title: string;
    }[];
  }[];
};
