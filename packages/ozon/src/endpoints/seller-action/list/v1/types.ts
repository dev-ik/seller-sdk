import type {
  OzonSellerActionListItem,
  OzonSellerActionStatus,
  OzonSellerActionType,
} from "../../shared/v1/types.js";
export interface ListSellerActionsV1Request {
  /**
   * Идентификаторы акций.
   *
   * Максимум элементов: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_ids?: readonly string[];

  /**
   * Механика акции: - `DISCOUNT` — скидка; - `VOUCHER_DISCOUNT` — скидка по промокоду; -
   * `DISCOUNT_WITH_CONDITION` — скидка от суммы заказа; - `INSTALLMENT` — беспроцентная рассрочка; -
   * `INDIVIDUAL_DISCOUNT_BY_PRODUCTS` — бонусы продавца; - `OZON_ACCOUNT_DISCOUNT` — повышенная
   * скидка с картой Ozon Банка; - `MULTI_LEVEL_DISCOUNT_ON_AMOUNT` — многоуровневая скидка от суммы.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_type?: readonly OzonSellerActionType[];

  /**
   * Количество значений на странице.
   *
   * Формат: `uint64`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ
   * начнётся с 11-го найденного элемента.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset?: number;

  /**
   * Поиск по названию акции.
   *
   * Минимальная длина: `3`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly search?: string;

  /**
   * Статус акции: - `ACTIVE` — активна; - `ENDED` — завершена; - `PLANNED` — запланирована; -
   * `PAUSED` — приостановлена.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status?: readonly OzonSellerActionStatus[];
}
export interface ListSellerActionsV1Response {
  readonly actions?: readonly OzonSellerActionListItem[];
  readonly total?: number;
}
