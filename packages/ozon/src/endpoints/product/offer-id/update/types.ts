export interface OzonProductOfferIdUpdate {
  /** Новый артикул, не более 50 символов. */
  readonly new_offer_id: string;
  /** Текущий артикул, не более 50 символов. */
  readonly offer_id: string;
}

export interface UpdateProductOfferIdsRequest {
  /** От 1 до 25 пар старого и нового артикула. */
  readonly update_offer_id: readonly [
    OzonProductOfferIdUpdate,
    ...OzonProductOfferIdUpdate[],
  ];
}

export interface OzonProductOfferIdUpdateError {
  readonly message?: string;
  readonly offer_id?: string;
}

export interface UpdateProductOfferIdsResponse {
  /** Поэлементные ошибки; отсутствующие элементы были обработаны успешно. */
  readonly errors?: readonly OzonProductOfferIdUpdateError[];
}
