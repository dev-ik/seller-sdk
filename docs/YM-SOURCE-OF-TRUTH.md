# Источник контрактов Yandex Market Partner API

Основной источник — официальный репозиторий
[`yandex-market/yandex-market-partner-api`](https://github.com/yandex-market/yandex-market-partner-api)
и [документация Partner API](https://yandex.ru/dev/market/partner-api/doc/ru/).

Локальный snapshot в `docs/ym/openapi/` зафиксирован на commit
`116389b48f28c26275d40f0a7cb7cecd5a196ca0` и проверен 2026-08-19.
Метаданные находятся в `docs/ym/openapi.meta.json`, лицензия upstream — в
`docs/ym/UPSTREAM-LICENSE`.

Snapshot содержит 165 операций. Для каждой в `docs/ym/endpoints.json`
фиксируются operation ID, domain, HTTP method/path, production origin, retry
safety, deprecation и resource-limit metadata.

Генератор работает только с локальным snapshot:

```bash
pnpm update:ym
pnpm check:ym
```

Если официальный контракт нельзя надёжно проверить, endpoint не изменяется по
памяти или данным неофициального SDK.
