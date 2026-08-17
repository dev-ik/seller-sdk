# Источник контрактов Wildberries API

## Основной источник

```text
https://dev.wildberries.ru/docs/openapi/api-information
```

Wildberries публикует API как несколько OpenAPI 3.0 спецификаций. Проверенный
локальный snapshot хранится в `docs/wb/swagger/*.yaml`; список файлов и дата
проверки — в `docs/wb/swagger.meta.json`.

## Покрытие

Snapshot содержит 13 разделов и 286 операций: общее, товары, заказы FBS/DBW/DBS,
самовывоз, поставки FBW, продвижение, общение с покупателями, тарифы, аналитика,
отчёты, финансы и документы.

`docs/wb/endpoints.json` фиксирует для каждой операции HTTP method, path,
production/sandbox origin, retry safety, документацию и `verifiedAt`.

## Авторизация и origin

Токен передаётся в заголовке `Authorization` без `Bearer`. WB API использует
отдельные host'ы для разных сервисов. Клиент принимает только origin,
перечисленные в официальных спецификациях; произвольный URL не может получить
токен.

## Расхождение контрактов

При обновлении Swagger выполните:

```bash
pnpm update:wb
pnpm check:wb
```

Генератор обновляет типы, SafeShape-контракты, manifest и API reference. Если
официальную схему нельзя надёжно проверить, операция не добавляется по памяти.
