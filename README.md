# Seller SDK

> Типобезопасные TypeScript-клиенты для Seller API российских маркетплейсов.

[![CI](https://github.com/dev-ik/seller-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/dev-ik/seller-sdk/actions/workflows/ci.yml)

Первый релиз поддерживает Ozon Seller API. Вы можете установить только Ozon
без лишних реализаций или использовать общий пакет для всех поддерживаемых
маркетплейсов.

## Быстрый старт

Для проекта, который работает только с Ozon:

```bash
npm i @seller-sdk/ozon
```

```ts
import { OzonClient, OzonValues } from "@seller-sdk/ozon";

const ozon = new OzonClient({
  clientId: process.env.OZON_CLIENT_ID!,
  apiKey: process.env.OZON_API_KEY!,
});

const products = await ozon.products.list({
  filter: {
    visibility: OzonValues.ProductListVisibility.All,
  },
  limit: 100,
});
```

Для приложения, которому нужна единая точка входа:

```bash
npm i seller-sdk
```

```ts
import { Marketplace, SellerClient } from "seller-sdk";

const seller = new SellerClient({
  marketplace: Marketplace.Ozon,
  credentials: {
    clientId: process.env.OZON_CLIENT_ID!,
    apiKey: process.env.OZON_API_KEY!,
  },
});

const roles = await seller.ozon.access.getRoles();
```

Использовать одновременно `seller-sdk` и `@seller-sdk/ozon` не требуется.

## Почему SDK удобно использовать

- Все 461 операция Ozon распределены по предметным областям.
- TypeScript подсказывает обязательные поля, ограничения и закрытые наборы
  значений.
- Ответы проверяются во время выполнения через SafeShape.
- Версионные семейства имеют рекомендуемые методы без суффикса версии.
- Тайм-ауты, отмена, безопасные повторы и метаданные ответа настраиваются единообразно.
- Для распространённых списков есть ленивые async-итераторы.
- Новые методы Ozon можно временно вызвать через fixed-origin `rawRequest`.

## Методы без версии

В прикладном коде используйте имя без версии. SDK направит вызов на актуальный
поддерживаемый контракт:

```ts
await ozon.warehouses.listWarehouses({ limit: 100 }); // сейчас v2
await ozon.finance.listFinanceTransactions(input); // сейчас v3
```

Явную версию используйте только для намеренной фиксации контракта:

```ts
await ozon.warehouses.listWarehousesV2({ limit: 100 });
```

Если Ozon пометил контракт устаревшим, IDE зачеркнёт и версионный метод, и его
алиас. Например, `listFinanceTransactions` устаревает 8 сентября 2026 года;
для нового кода используйте `finance.accruals`.

## Конфигурация запросов

```ts
const ozon = new OzonClient(credentials, {
  timeoutMs: 30_000,
  deadlineMs: 60_000,
  maxRetries: 2,
  onResponse({ operationId, status, requestId, attempt }) {
    console.info({ operationId, status, requestId, attempt });
  },
});

await ozon.products.list(input, {
  timeoutMs: 10_000,
  maxRetries: 1,
  signal: abortController.signal,
});
```

SDK повторяет только операции, отмеченные как безопасные. Мутации не
повторяются автоматически независимо от `maxRetries`.

## Пагинация

```ts
for await (const product of ozon.products.listAll({
  filter: {},
  limit: 100,
})) {
  console.log(product.offer_id);
}
```

`listPages()` возвращает страницы, а `listAll()` — отдельные элементы без
накопления всего ответа в памяти. Готовые итераторы есть для товаров, FBO и FBS.

## Обработка ошибок

```ts
import { ApiError, ResponseValidationError } from "@seller-sdk/ozon";

try {
  await ozon.products.list({ filter: {}, limit: 100 });
} catch (error) {
  if (error instanceof ApiError) {
    console.error(
      error.status,
      error.apiCode,
      error.apiMessage,
      error.requestId,
    );
  }

  if (error instanceof ResponseValidationError) {
    console.error(error.operationId, error.issues);
  }
}
```

SDK не добавляет в ошибки ключ API, `Client-Id`, заголовки авторизации или
необработанное тело ответа.

## Требования

- Node.js 20.10 или новее;
- ESM;
- TypeScript рекомендуется, но собранный JavaScript также поддерживается;
- секреты продавца должны использоваться только на сервере.

Поддержка браузера не заявляется: ключи Seller API нельзя передавать в клиентское
приложение.

## Документация

- [Публичный API](PUBLIC_API.md)
- [Полный справочник Ozon](docs/ozon/API-REFERENCE.md)
- [Архитектура](ARCHITECTURE.md)
- [Источник контрактов Ozon](docs/OZON-SOURCE-OF-TRUTH.md)
- [Процесс добавления endpoint](docs/ENDPOINT-WORKFLOW.md)
- [История изменений](CHANGELOG.md)
- [Политика безопасности](SECURITY.md)

## Разработка

```bash
pnpm install
pnpm release:check
```

`release:check` проверяет форматирование, сгенерированные файлы, lint,
TypeScript, тесты, сборку, состав tarball и установку в чистый consumer-проект.

## Лицензия и товарные знаки

[MIT](LICENSE) © Seller SDK contributors.

Seller SDK — независимый open-source проект. Он не связан с Ozon, не одобрен и
не спонсируется Ozon или другими маркетплейсами. Названия маркетплейсов
используются только для обозначения совместимости с их API.
