# seller-sdk

> Единая типобезопасная точка входа для Seller API поддерживаемых маркетплейсов.

В версии `0.1.0` доступен Ozon. Если приложению нужен только Ozon, установите
более узкий пакет `@seller-sdk/ozon`.

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

Неизвестное имя маркетплейса отклоняется TypeScript и runtime-валидацией.
`SellerClient` выбирает конкретный SDK, но не превращает разные маркетплейсы в
искусственную универсальную модель.

## Выбор пакета

- `seller-sdk` — единый пакет для приложения с несколькими маркетплейсами;
- `@seller-sdk/ozon` — только Ozon, без будущих реализаций других площадок.

Устанавливать оба пакета одновременно не требуется.

Документация: [github.com/dev-ik/seller-sdk](https://github.com/dev-ik/seller-sdk).

## Лицензия и товарные знаки

[MIT](LICENSE). Проект не связан с Ozon или другими маркетплейсами и не является
их официальным SDK.
