// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить список активных или приглашённых пользователей продавца».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену
 *
 * Метод возвращает список активных или приглашённых пользователей профиля продавца.
 *
 * Чтобы выбрать список, укажите значение параметра `isInviteOnly`:
 *  - `isInviteOnly=true` — список приглашённых пользователей, которые ещё не активировали доступ
 *  - `isInviteOnly=false` или не указан — список активных пользователей
 *
 * По каждому пользователю можно получить:
 *  - роль пользователя
 *  - разделы, к которым есть доступы
 *  - статус приглашения
 *
 * Список приглашённых пользователей в ответе всегда отсортирован по дате создания: от новых до старых.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 сек | 1 запрос | 1 сек | 5 запросов |
 *
 * GET /api/v1/users
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/api-information
 */
export type GetV1UsersInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Количество активных или приглашённых пользователей в ответе
     *
     * Формат: `int64`.
     *
     * Значение по умолчанию: `100`.
     *
     * Максимальное значение: 100.
     */
    readonly limit?: number;

    /**
     * Сколько элементов пропустить. Например, для значения 10 ответ начнется с 11 элемента
     *
     * Формат: `int64`.
     *
     * Значение по умолчанию: `0`.
     */
    readonly offset?: number;

    /**
     * - `true` — список приглашённых пользователей, которые ещё не активировали доступ
     * - `false` или не указан — список активных пользователей профиля продавца
     *
     * Значение по умолчанию: `false`.
     */
    readonly isInviteOnly?: boolean;
  };
};
/**
 * Успешный ответ метода «Получить список активных или приглашённых пользователей продавца».
 *
 * 200: Успешно.
 */
export type GetV1UsersResponse = {
  /**
   * Общее количество активных или приглашённых пользователей
   */
  readonly total: number;

  /**
   * Количество активных или приглашённых пользователей на текущей странице
   */
  readonly countInResponse: number;

  /**
   * Информация о пользователях
   */
  readonly users: readonly {
    /**
     * ID пользователя
     */
    readonly id: number;

    /**
     * Роль пользователя:
     *  * `user` — пользователь, который активировал доступ
     *  * ` ` (пустая строка) — пользователь, который не активировал доступ
     */
    readonly role: "user" | "";

    /**
     * Должность пользователя
     */
    readonly position: string;

    /**
     * Номер телефона пользователя
     */
    readonly phone: string;

    /**
     * Email пользователя
     */
    readonly email: string;

    /**
     * Является ли пользователь владельцем профиля продавца
     */
    readonly isOwner: boolean;

    /**
     * Имя пользователя
     */
    readonly firstName: string;

    /**
     * Фамилия пользователя
     */
    readonly secondName: string;

    /**
     * Отчество пользователя
     */
    readonly patronymic: string;

    /**
     * Может ли пользователь одобрять возвраты товаров
     */
    readonly goodsReturn: boolean;

    /**
     * Приглашён ли пользователь
     */
    readonly isInvitee: boolean;

    /**
     * Информация о приглашении, если пользователь приглашён
     */
    readonly inviteeInfo: {
      /**
       * Номер телефона приглашённого пользователя
       */
      readonly phoneNumber?: string;

      /**
       * Должность приглашённого пользователя
       */
      readonly position?: string;

      /**
       * ID приглашения
       *
       * Формат: `UUID`.
       */
      readonly inviteUuid?: string;

      /**
       * Дата и время окончания срока действия приглашения
       *
       * Формат: `date-time`.
       */
      readonly expiredAt?: string;

      /**
       * - `true` — приглашение активно
       * - `false` — приглашение неактивно
       */
      readonly isActive?: boolean;
    } | null;

    /** Описание отсутствует в OpenAPI WB. */
    readonly access: readonly {
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
