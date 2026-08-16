/** Роль и доступные для неё методы Ozon Seller API. */
export interface OzonRole {
  /** Название роли. */
  readonly name?: string;

  /** Методы, доступные для роли. */
  readonly methods?: readonly string[];
}

/** Информация о сроке действия API-ключа и связанных с ним ролях. */
export interface GetRolesResponse {
  /** Дата истечения срока действия ключа в формате RFC 3339 или `null`, если срок не задан. */
  readonly expires_at?: string | null;

  /** Доступные роли и методы. */
  readonly roles?: readonly OzonRole[];
}
