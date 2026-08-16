# Дорожная карта

## v0.1 — Ozon Seller SDK

Готово:

- [x] самостоятельный `@seller-sdk/ozon`;
- [x] общий пакет `seller-sdk`;
- [x] Node.js 20+, strict TypeScript, ESM, pnpm и Vitest;
- [x] native fetch, timeout, abort, deadline и безопасные retries;
- [x] SafeShape runtime boundary;
- [x] 461 операция Ozon;
- [x] domain API и алиасы без версий;
- [x] IntelliSense и закрытые каталоги `OzonValues`;
- [x] метаданные ответов, pagination и `rawRequest`;
- [x] CI, сборка, tarball и consumer smoke tests;
- [x] русская документация, changelog и security policy;
- [x] workflow публикации с npm Trusted Publishing/OIDC.

Перед первой публикацией:

- [ ] опубликовать `@seller-sdk/ozon@0.1.0` и `seller-sdk@0.1.0`;
- [ ] настроить Trusted Publisher для обоих пакетов;
- [ ] создать GitHub Release `v0.1.0`;
- [ ] проверить установку опубликованных пакетов из npm.

## После v0.1

- Отслеживать drift официального Ozon OpenAPI.
- Добавлять workflow-level helpers только по реальным пользовательским сценариям.
- Сокращать размер tarball без ухудшения деклараций и IntelliSense.
- Подготовить миграции для endpoint, которые Ozon отключает.

## Второй маркетплейс

Следующая площадка получает отдельный пакет и запись в `MarketplaceRegistry`.
Она не должна увеличивать зависимости `@seller-sdk/ozon` или заставлять общий
клиент выдумывать универсальную бизнес-модель.
