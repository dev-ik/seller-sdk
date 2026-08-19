# План реализации SDK для Яндекс Маркета

**Статус:** реализовано в v0.3.0
**Дата проверки источников:** 2026-08-19
**Целевой focused-пакет:** `@seller-sdk/ym`

## Результат

После реализации пользователь устанавливает самостоятельный пакет Яндекс
Маркета без Ozon, Wildberries и umbrella-пакета:

```bash
npm i @seller-sdk/ym
```

API focused-пакета:

```ts
import { YmClient } from "@seller-sdk/ym";

const ym = new YmClient({ apiKey: process.env.YM_API_KEY! });

const orders = await ym.orders.getBusinessOrders({
  path: { businessId: 123456 },
  body: {},
});
```

Целевой API общего пакета:

```ts
import { Marketplace, SellerClient } from "seller-sdk";

const seller = new SellerClient({
  marketplace: Marketplace.Ym,
  credentials: { apiKey: process.env.YM_API_KEY! },
});

await seller.ym.orders.getBusinessOrders({
  path: { businessId: 123456 },
  body: {},
});
```

## Решение по именованию

В программных идентификаторах полное `YandexMarket` сокращается до `Ym` или
`ym`. Это соответствует существующему стилю `WbClient`, `Marketplace.Wb` и
`seller.wb`.

| Назначение                 | Имя                                      |
| -------------------------- | ---------------------------------------- |
| npm-пакет                  | `@seller-sdk/ym`                         |
| клиент                     | `YmClient`                               |
| credentials                | `YmCredentials`                          |
| конфигурация               | `YmClientConfig`                         |
| запись marketplace         | `Marketplace.Ym`                         |
| строковое значение         | `"ym"`                                   |
| namespace umbrella-клиента | `seller.ym`                              |
| константы                  | `YM_API_ORIGIN`, `YM_OPERATION_METADATA` |
| документация и описание    | «Яндекс Маркет», `Yandex Market`         |

`YMClient` не используется: для TypeScript-идентификаторов применяется
PascalCase-вариант `YmClient`, как уже применяется `WbClient`. Длинный пакет
`@seller-sdk/yandex-market` не публикуется как алиас. Для поиска в npm в
`keywords` и `description` указываются `yandex`, `yandex-market`,
`marketplace` и `seller-api`.

## Официальные источники

Основной источник контрактов:

- репозиторий:
  <https://github.com/yandex-market/yandex-market-partner-api>;
- документация:
  <https://yandex.ru/dev/market/partner-api/doc/ru/>;
- проверенный commit:
  [`116389b48f28c26275d40f0a7cb7cecd5a196ca0`](https://github.com/yandex-market/yandex-market-partner-api/commit/116389b48f28c26275d40f0a7cb7cecd5a196ca0),
  2026-08-12;
- формат: OpenAPI 3.0.3;
- лицензия спецификации: BSD 3-Clause;
- production origin: `https://api.partner.market.yandex.ru`.

Локальный snapshot должен храниться целиком в
`docs/ym/openapi/`, потому что корневой `openapi.yaml` использует внешние `$ref`
на файлы из `paths/` и `components/`. Рядом хранится `docs/ym/openapi.meta.json`
с URL источника, commit SHA, датой проверки, форматом и лицензией.

На проверенном snapshot находятся:

- 155 path entries;
- 165 операций: 35 `GET`, 113 `POST`, 15 `PUT`, 2 `DELETE`;
- 826 component schemas;
- 60 общих parameters и 16 общих responses;
- 8 deprecated-операций;
- 10 операций с binary response;
- 1 операция с `multipart/form-data`;
- 195 nullable-узлов и 124 использования `allOf`.

## Границы продукта

`@seller-sdk/ym` является first-class marketplace-пакетом и не зависит от
`@seller-sdk/ozon`, `@seller-sdk/wb`, `seller-sdk` или публикуемого core.
Приватный `packages/core` компилируется внутрь его tarball по существующей
схеме.

Направление зависимостей:

```text
seller-sdk
    ├── @seller-sdk/ozon
    ├── @seller-sdk/wb
    └── @seller-sdk/ym

@seller-sdk/ym
    └── @safe-shape/core
```

Яндекс Маркет сохраняет собственную предметную модель. `SellerClient` только
выбирает реализацию и не создаёт универсальные товары, заказы, цены или отчёты.

API-уведомления Яндекс Маркета являются входящими запросами продавцу и не входят
в первый релиз `@seller-sdk/ym`. Для них нужен отдельный контракт webhook
receiver после основного Partner API.

## Авторизация и безопасность

Первый релиз принимает только рекомендованный `Api-Key`:

```ts
export interface YmCredentials {
  readonly apiKey: string;
}
```

Клиент передаёт значение без префикса в заголовке `Api-Key` и никогда не
показывает его в ошибках, metadata, логах или сериализованном клиенте.

OAuth присутствует в OpenAPI, но официально устарел. Он не добавляется в
начальный публичный контракт. Если существующим интеграциям понадобится OAuth,
его следует проектировать отдельной deprecated-веткой credentials с заголовком
`Authorization: Bearer <token>` и поддержкой `X-Business-Id`, не расширяя
`YmCredentials` необязательным набором взаимоисключающих строк.

Origin всегда фиксирован. `rawRequest` принимает только абсолютный path внутри
`https://api.partner.market.yandex.ru` и не позволяет отправить токен на другой
host.

## Генерация API

Рекомендуется создать отдельный `scripts/build-ym-api.mjs` на основе
проверенного WB pipeline. На первом этапе не нужно превращать WB- и YM-генераторы
в универсальный framework: отдельный генератор уменьшает риск регрессий в уже
работающем `@seller-sdk/wb`. Общие части можно выделить позже, если появится
устойчивая одинаковая модель как минимум у двух генераторов.

Генератор должен:

1. Читать локальный snapshot без сетевых запросов.
2. Разрешать относительные `$ref` между `openapi.yaml`, `paths/`, `parameters`,
   `responses` и `schemas`.
3. Проверять уникальность всех 165 `operationId`.
4. Генерировать строгие request/response types.
5. Генерировать SafeShape response contracts.
6. Поддерживать `allOf`, nullable, enum, arrays, objects, integer formats,
   date/time strings и recursive references.
7. Поддерживать JSON, PDF, Excel, JPEG, PNG и multipart form data.
8. Создавать domain API по первому предметному tag операции.
9. Создавать `YmValues` для закрытых enum-каталогов.
10. Создавать `docs/ym/endpoints.json` и `docs/ym/API-REFERENCE.md`.
11. Сохранять official path, method, operationId, tags, scopes, rate-limit
    metadata, deprecation metadata, source commit и `verifiedAt`.
12. Работать в режимах update и `--check`.

Основные публичные domains:

```text
auth, bids, businesses, campaigns, categories, chats, content,
deliveryOptions, deliveryServices, goodsFeedback, goodsQuestions,
hiddenOffers, offers, orders, outlets, prices, promos, ratings,
regions, reports, returns, shipments, stocks, supplyRequests,
tariffs, warehouses
```

Методы называются по официальному `operationId`, например
`orders.getBusinessOrders`. HTTP-версия остаётся в metadata и path. Поскольку
официальные `operationId` уже семантические и обычно не содержат версию,
искусственные `V1`/`V2` aliases не создаются.

## Обязательный prerequisite в SafeShape

В спецификации есть две настоящие рекурсивные схемы:

- `RegionDTO.parent -> RegionDTO`;
- `CategoryDTO.children[] -> CategoryDTO`.

Они затрагивают 11 операций, включая `getBusinessOrders`, методы регионов,
outlets и `getCategoriesTree`. `@safe-shape/core@2.0.0` предоставляет
lazy/recursive schema; prerequisite выполнен до генерации полного покрытия YM.

До заявления полного покрытия нужно:

1. Добавить в SafeShape публичный lazy contract, например `lazy(() => schema)`.
2. Проверить рекурсивный `parse`, `safeParse`, nullable, optional, diagnostics и
   защиту от некорректных циклических JavaScript-объектов.
3. Выпустить новую версию `@safe-shape/core`.
4. Обновить зависимость всех marketplace-пакетов согласованно.
5. Добавить contract tests на `RegionDTO` и `CategoryDTO`.

Нельзя заменять рекурсивные части на `unknown`, ограничивать их произвольной
глубиной или приводить сетевой payload к типу через cast. Пока prerequisite не
выполнен, полное покрытие Яндекс Маркета считается заблокированным.

## HTTP mapping, ошибки и retries

Жизненный цикл ответа остаётся общим:

```text
JSON unknown
→ SafeShape contract
→ typed result
```

Особенности Яндекс Маркета:

- ошибки обычно находятся в `errors[]`, а не в top-level `code` и `message`;
- HTTP 420 означает rate limit и должен превращаться в `RateLimitError`;
- HTTP 423 остаётся `ApiError`;
- `X-RateLimit-Resource-Limit`, `X-RateLimit-Resource-Remaining` и
  `X-RateLimit-Resource-Until` сохраняются в response metadata;
- официальный глобальный лимит — не больше четырёх параллельных запросов на
  соответствующую сущность;
- максимальный размер request body — 512 КБ.

Для marketplace-owned error parsing transport получает узкий callback или
адаптер извлечения `apiCode` и `apiMessage`. Текущее поведение Ozon и WB при этом
не меняется.

Политика повторов:

- `GET` считается safe;
- `POST`, `PUT` и `DELETE` по умолчанию unsafe;
- POST-операция может стать safe только после отдельной проверки официальной
  семантики и фиксации решения в manifest;
- HTTP 420 автоматически не повторяется: ожидание может длиться до значения
  `X-RateLimit-Resource-Until`;
- мутации нельзя сделать retryable пользовательской настройкой.

Автоматический concurrency limiter не входит в первый релиз. Глобальный limiter
на весь клиент снизил бы пропускную способность независимых `businessId` и
`campaignId`, а корректный entity-aware limiter требует отдельного дизайна.

## Deprecated-операции

Snapshot содержит 8 deprecated-операций. Для каждой нужно переносить:

- `deprecated: true`;
- `x-deprecation-config.degradation-start-date`;
- `x-deprecation-config.shutdown-date`;
- `replacement-operation-id`, если он опубликован.

Официальная схема не указывает replacement для
`getCategoriesMaxSaleQuantum`. Это должно быть явно отражено в generated docs;
замена не придумывается. Остальные replacement operation IDs проверяются на
наличие среди сгенерированных методов.

## Порядок реализации

### 1. Зафиксировать источник

1. `docs/YM-SOURCE-OF-TRUTH.md`.
2. `docs/ym/openapi/**`.
3. `docs/ym/openapi.meta.json`.
4. Копия upstream BSD-3-Clause license или attribution рядом со snapshot.

### 2. Добавить recursive contracts в SafeShape

Выпустить версию SafeShape с lazy schema, обновить lockfile и только после этого
включать рекурсивные response contracts в генерацию.

### 3. Реализовать генератор

1. `scripts/build-ym-api.mjs`.
2. Root scripts `update:ym` и `check:ym`.
3. Generated-file drift check в `verify`.

### 4. Создать focused-пакет

Рекомендуемый порядок файлов:

1. `packages/ym/package.json`, `tsconfig.json`, `tsconfig.build.json`, `LICENSE`.
2. `packages/ym/src/credentials.ts`.
3. `packages/ym/src/configuration.ts`.
4. `packages/ym/src/auth.ts`.
5. `packages/ym/src/request-options.ts`.
6. `packages/ym/src/schema.ts`.
7. `packages/ym/src/parse-response.ts`.
8. `packages/ym/src/operation.ts`.
9. `packages/ym/src/raw-request.ts`.
10. `packages/ym/src/client.ts`.
11. Сгенерированные contracts, endpoints, values и domain API.
12. `packages/ym/src/index.ts` и `packages/ym/README.md`.

### 5. Подключить umbrella-пакет

1. Добавить `@seller-sdk/ym` в dependencies.
2. Добавить `Marketplace.Ym = "ym"`.
3. Расширить `MarketplaceRegistry` типами YM credentials, config и client.
4. Добавить runtime SafeShape validation динамической конфигурации.
5. Добавить `seller.ym` и YM exports.
6. Проверить compile-time rejection неизвестных marketplace и неверных
   credentials.

### 6. Обновить release surface

Обновить:

- root `package.json`, TypeScript paths и Vitest aliases;
- build, format, lint, typecheck и verification scripts;
- `scripts/check-release.mjs`;
- `scripts/pack-check.mjs`;
- `scripts/consumer-smoke.mjs`;
- `scripts/pack-release.mjs`;
- release workflow и Trusted Publishing checklist;
- `NORTH_STAR.md`, `ARCHITECTURE.md`, `PUBLIC_API.md`, `ROADMAP.md`;
- ADR-001 и ADR-003;
- root README, umbrella README, changelog и security guidance.

## Проверки

Минимальный test matrix:

- credentials runtime validation и redaction;
- `Api-Key` header и fixed origin;
- path, query, header и JSON body mapping;
- repeated query arrays по правилам OpenAPI;
- multipart upload через `FormData`;
- JSON, empty и binary success responses;
- malformed required field, malformed array item и nullable field;
- recursive `RegionDTO` и `CategoryDTO`;
- nested `errors[]`, HTTP 401/403/420/423/500;
- abort, timeout, deadline и safe retry;
- запрет retry для mutations;
- metadata и rate-limit headers;
- все 165 operation IDs доступны в domain API;
- deprecated metadata и replacement validation;
- focused tarball не устанавливает Ozon, WB, umbrella или отдельный core;
- umbrella-клиент строго связывает `"ym"` с `YmCredentials` и `YmClient`.

Финальная проверка:

```bash
pnpm update:ym
pnpm check:ym
pnpm release:check
```

Команды добавляются в проект только вместе с реализацией и до этого не должны
упоминаться как существующие в пользовательской документации.

## Критерий готовности

Поддержка Яндекс Маркета готова, когда:

- `@seller-sdk/ym` устанавливается самостоятельно;
- все 165 операций snapshot доступны через `YmClient`;
- каждый structured response проходит SafeShape;
- binary и multipart операции проверены;
- ошибки и HTTP 420 отображаются в стабильные SDK errors;
- секрет не попадает в ошибки и metadata;
- `Marketplace.Ym`, литерал `"ym"` и `seller.ym` строго типизированы;
- source commit, `verifiedAt`, deprecations и rate-limit metadata записаны;
- generated files воспроизводимы;
- lint, typecheck, tests, build, pack check и consumer smoke проходят;
- README focused-пакета и общая документация обновлены.

## Связанные решения

- [Архитектура](../ARCHITECTURE.md)
- [Публичный API](../PUBLIC_API.md)
- [ADR-001: стратегия пакетов](./ADR-001-package-strategy.md)
- [ADR-002: SafeShape](./ADR-002-safe-shape.md)
- [ADR-003: typed marketplace registry](./ADR-003-typed-marketplace-registry.md)
- [Endpoint workflow](./ENDPOINT-WORKFLOW.md)
