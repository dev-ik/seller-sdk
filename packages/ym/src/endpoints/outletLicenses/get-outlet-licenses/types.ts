// Generated public types for this Yandex Market endpoint.
type OutletLicensesApiResponseStatusType = "OK" | "ERROR";
type OutletLicensesFullOutletLicenseDTO = {
  readonly id?: number;
  readonly outletId: number;
  readonly licenseType: OutletLicensesLicenseType;
  readonly number: string;
  readonly dateOfIssue: string;
  readonly dateOfExpiry: string;
  readonly checkStatus?: OutletLicensesLicenseCheckStatusType;
  readonly checkComment?: string;
};
type OutletLicensesGetOutletLicensesResponse = {
  readonly status: OutletLicensesApiResponseStatusType;
  readonly result?: OutletLicensesOutletLicensesResponseDTO;
};
type OutletLicensesLicenseCheckStatusType =
  | "NEW"
  | "SUCCESS"
  | "FAIL"
  | "REVOKE"
  | "DONT_WANT"
  | "FAIL_MANUAL";
type OutletLicensesLicenseType = "ALCOHOL" | "UNKNOWN";
type OutletLicensesOutletLicensesResponseDTO = {
  readonly licenses: readonly OutletLicensesFullOutletLicenseDTO[];
};

/**
 * Параметры метода «Информация о лицензиях для точек продаж».
 *
 * Возвращает информацию о лицензиях для точек продаж.
 *
 * GET /v2/campaigns/{campaignId}/outlets/licenses
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOutletLicensesInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.
     *
     * Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:
     *
     * * блок **Идентификатор кампании**;
     * * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.
     *
     * ⚠️ Не путайте его с:
     * - идентификатором магазина, который отображается в личном кабинете продавца;
     * - рекламными кампаниями.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly campaignId: number;
  } /**
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Список идентификаторов точек продаж, для которых нужно получить информацию о лицензиях. Идентификаторы указываются через запятую.
     *
     * В запросе должен быть либо параметр `outletIds`, либо параметр `ids`. Запрос с обоими параметрами или без них приведет к ошибке.
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 500.
     */
    readonly outletIds?: readonly number[];

    /**
     * Список идентификаторов лицензий.
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 500.
     */
    readonly ids?: readonly number[];
  };
};
/**
 * Успешный ответ метода «Информация о лицензиях для точек продаж».
 *
 * 200: Найденные лицензии собственных точек продаж.
 */
export type GetOutletLicensesResponse = OutletLicensesGetOutletLicensesResponse;
