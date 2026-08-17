# seller-sdk

> Единая типобезопасная точка входа для Seller API поддерживаемых маркетплейсов.

Доступны Ozon и Wildberries. Если приложению нужна одна площадка, установите
focused package `@seller-sdk/ozon` или `@seller-sdk/wb`.

## Установка

```bash
npm i seller-sdk
```

Требуется Node.js 20.10 или новее.

## Использование

```ts
import { Marketplace, OzonValues, SellerClient } from "seller-sdk";

const seller = new SellerClient({
  marketplace: Marketplace.Ozon,
  credentials: {
    clientId: process.env.OZON_CLIENT_ID!,
    apiKey: process.env.OZON_API_KEY!,
  },
  config: {
    timeoutMs: 30_000,
    deadlineMs: 60_000,
    maxRetries: 2,
  },
});

const products = await seller.ozon.products.list({
  filter: {
    visibility: OzonValues.ProductListVisibility.All,
  },
  limit: 100,
});
```

Строковый литерал также допустим:

```ts
new SellerClient({
  marketplace: "ozon",
  credentials: { clientId, apiKey },
});
```

Wildberries выбирается тем же типизированным registry:

```ts
const wbSeller = new SellerClient({
  marketplace: Marketplace.Wb,
  credentials: { token: process.env.WB_API_TOKEN! },
});

await wbSeller.wb.general.getPing();
```

Неизвестное имя маркетплейса отклоняется TypeScript и runtime-валидацией.
`SellerClient` выбирает конкретный SDK, но не превращает разные маркетплейсы в
искусственную универсальную модель.

## Выбор пакета

- `seller-sdk` — единый пакет для приложения с несколькими маркетплейсами;
- `@seller-sdk/ozon` — только Ozon;
- `@seller-sdk/wb` — только Wildberries.

Устанавливать оба пакета одновременно не требуется.

## Документация

- [Руководство по `@seller-sdk/ozon`](https://github.com/dev-ik/seller-sdk/blob/main/packages/ozon/README.md)
- [Справочник методов Ozon](https://github.com/dev-ik/seller-sdk/blob/main/docs/ozon/API-REFERENCE.md)
- [Руководство по `@seller-sdk/wb`](https://github.com/dev-ik/seller-sdk/blob/main/packages/wb/README.md)
- [Справочник методов Wildberries](https://github.com/dev-ik/seller-sdk/blob/main/docs/wb/API-REFERENCE.md)

## Лицензия и товарные знаки

[MIT](https://github.com/dev-ik/seller-sdk/blob/main/LICENSE) © Seller SDK
contributors.

Seller SDK — независимый open-source проект. Он не связан с Ozon или
Wildberries, не одобрен и не спонсируется ими либо другими маркетплейсами.
Названия маркетплейсов используются только для обозначения совместимости с их
API.
