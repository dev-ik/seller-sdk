// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удалить пользователя».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену
 *
 * Метод удаляет пользователя из [списка сотрудников продавца](/openapi/api-information#tag/sellerUserManagement/operation/getV1Users). Этому пользователю будет закрыт доступ в профиль продавца.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 сек | 1 запрос | 1 сек | 10 запросов |
 *
 * DELETE /api/v1/user
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/api-information
 */
export type DeleteV1UserInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID пользователя, которому будет закрыт доступ
     *
     * Формат: `int64`.
     */
    readonly deletedUserID: number;
  };
};
/**
 * Успешный ответ метода «Удалить пользователя».
 *
 * 200: Успешно.
 */
export type DeleteV1UserResponse = undefined;
