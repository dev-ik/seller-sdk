// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Изменить права доступа пользователей».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену
 *
 * Метод меняет права доступа одному или нескольким пользователям.
 *
 * Обновляются только права доступа, переданные в параметрах запроса. Остальные поля остаются без изменений.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 сек | 1 запрос | 1 сек | 5 запросов |
 *
 * PUT /api/v1/users/access
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/api-information
 */
export type PutV1UsersAccessInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Настройки доступа для пользователя
     */
    readonly usersAccesses: readonly {
      /**
       * ID пользователя
       */
      readonly userId?: number;

      /** Описание отсутствует в OpenAPI WB. */
      readonly access?: readonly {
        /**
         * Код раздела профиля продавца, к которому пользователь получит доступ:
         * * `balance` — Просмотр баланса и вывод средств
         * * `brands` — Управление брендами
         * * `changeJam` — Доступ к подключению подписки **Джем**: **А/Б тесты**, отметки на фото, автозапуски видео, сравнение карточек
         * * `discountPrice` — Изменение цен на товары, управление скидками и акциями
         * * `finance` — Финансовая аналитика. Статистика по балансу, финансовые отчёты, история платежей
         * * `showcase` — Управление витриной магазина
         * * `suppliersDocuments` — Просмотр и скачивание документов по работе с площадкой
         * * `supply` — Создание и управление поставками FBW
         * * `questions` — Просмотр и ответы на вопросы покупателей
         * * `pinFeedbacks` — Возможность закреплять и откреплять отзывы
         * * `pointsForReviews` — Баллы за отзывы
         * * `feedbacks` — Просмотр и ответы на отзывы покупателей
         * * `oldAnalyticsReports` — Отчёты
         * * `marketplace` — Свой склад
         * * `brandsFlow` — Мои бренды
         * * `copyrightComplaints` — Обращения правообладателей
         * * `pretrialClaims` — Досудебные претензии
         * * `sellersChat` — Чат с покупателями
         * * `brandzone` — Бренд-зона. Публикация изменений
         * * `brandzoneSubscribe` — Управление подпиской бренд-зоны
         */
        readonly code:
          | "balance"
          | "brands"
          | "changeJam"
          | "discountPrice"
          | "finance"
          | "showcase"
          | "suppliersDocuments"
          | "supply"
          | "questions"
          | "pinFeedbacks"
          | "pointsForReviews"
          | "feedbacks"
          | "oldAnalyticsReports"
          | "marketplace"
          | "brandsFlow"
          | "copyrightComplaints"
          | "pretrialClaims"
          | "sellersChat"
          | "brandzone"
          | "brandzoneSubscribe";

        /**
         * * `true` — доступ к разделу запрещён
         * * `false` — доступ к разделу разрешён
         */
        readonly disabled: boolean;
      }[];
    }[];
  };
};
/**
 * Успешный ответ метода «Изменить права доступа пользователей».
 *
 * 200: Успешно.
 */
export type PutV1UsersAccessResponse = undefined;
