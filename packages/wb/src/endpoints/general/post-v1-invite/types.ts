// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Создать приглашение для нового пользователя».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену
 *
 * Метод создаёт приглашение для нового пользователя с настройкой доступов к разделам профиля продавца.
 *
 * Как выдаются права доступа:
 * - Если `access` пустой (`[]`) или не указан — по умолчанию выдаются все доступы, кроме доступов к витрине (`showcase`) и **Джем** (`changeJam`)
 * - Если в `access` указана часть разделов профиля, то кроме тех доступов, что указаны в запросе, также выдаются все доступы по умолчанию
 * - Если в `access` перечислены все возможные разделы, доступы будут выданы согласно запросу, без доступов по умолчанию
 * - Если в `access` дважды указан один и тот же раздел (`code`):
 *  - при разных значениях `disabled` (`true` и `false`) доступ не будет выдан
 *  - при одинаковых значениях `"disabled": true` доступ не будет выдан
 *  - при одинаковых значениях `"disabled": false` доступ будет выдан
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 сек | 1 запрос | 1 сек | 5 запросов |
 *
 * POST /api/v1/invite
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/api-information
 */
export type PostV1InviteInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
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

    /** Описание отсутствует в OpenAPI WB. */
    readonly invite: {
      /**
       * Номер телефона пользователя для приглашения.
       * Поддерживаются номера телефонов из стран:• Азербайджан
       * • Армения
       * • Барбадос
       * • Беларусь
       * • Бразилия
       * • Гонконг
       * • Грузия
       * • Италия
       * • Казахстан
       * • Китай
       * • Кыргызстан
       * • Макао
       * • ОАЭ
       * • Россия
       * • Сербия
       * • Таджикистан
       * • Турция
       * • Узбекистан
       * • Чехия
       * • Швеция
       */
      readonly phoneNumber: string;

      /**
       * Должность пользователя
       *
       * Максимальная длина: 150.
       */
      readonly position?: string;
    };
  };
};
/**
 * Успешный ответ метода «Создать приглашение для нового пользователя».
 *
 * 200: Успешно.
 */
export type PostV1InviteResponse = {
  /**
   * ID приглашения
   *
   * Формат: `uuid`.
   */
  readonly inviteID: string;

  /**
   * Дата и время окончания срока действия приглашения
   *
   * Формат: `date-time`.
   */
  readonly expiredAt: string;

  /**
   * - `true` — приглашение создано успешно
   * - `false` — повторите запрос
   */
  readonly isSuccess: boolean;

  /**
   * URL приглашения, по которому должен перейти пользователь
   */
  readonly inviteUrl: string;
};
