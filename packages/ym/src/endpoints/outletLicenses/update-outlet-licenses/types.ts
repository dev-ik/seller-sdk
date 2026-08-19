// Generated public types for this Yandex Market endpoint.
type OutletLicensesApiResponseStatusType = "OK" | "ERROR";
type OutletLicensesEmptyApiResponse = {
  readonly status: OutletLicensesApiResponseStatusType;
};
type OutletLicensesLicenseType = "ALCOHOL" | "UNKNOWN";
type OutletLicensesOutletLicenseDTO = {
  readonly id?: number;
  readonly outletId: number;
  readonly licenseType: OutletLicensesLicenseType;
  readonly number: string;
  readonly dateOfIssue: string;
  readonly dateOfExpiry: string;
};
type OutletLicensesUpdateOutletLicenseRequest = {
  readonly licenses: readonly OutletLicensesOutletLicenseDTO[];
};

/**
 * Параметры метода «Создание и изменение лицензий для точек продаж».
 *
 * Передает информацию о новых и существующих лицензиях для точек продаж. Поддерживаются только лицензии на розничную продажу алкоголя.
 *
 * Чтобы размещать алкогольную продукцию на Маркете, надо также прислать гарантийное письмо (если вы еще не делали этого раньше) и правильно оформить предложения в прайс-листе. Далее информация о лицензиях проходит проверку.
 *
 * POST /v2/campaigns/{campaignId}/outlets/licenses
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateOutletLicensesInput = {
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
   * Тело запроса.
   */;
  readonly body: OutletLicensesUpdateOutletLicenseRequest;
};
/**
 * Успешный ответ метода «Создание и изменение лицензий для точек продаж».
 *
 * 200: Пустой ответ.
 */
export type UpdateOutletLicensesResponse = OutletLicensesEmptyApiResponse;
