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

Готово:

- [x] самостоятельный `@seller-sdk/wb`;
- [x] 286 операций из 13 официальных OpenAPI-файлов;
- [x] typed registry с `Marketplace.Wb` и литералом `"wb"`;
- [x] SafeShape runtime contracts и binary responses;
- [x] фиксированные production/sandbox origin;
- [x] umbrella-интеграция без универсальной бизнес-модели.

Перед публикацией нужно настроить Trusted Publisher для `@seller-sdk/wb`.
