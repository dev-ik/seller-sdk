# Участие в разработке

## Подготовка окружения

Требуются Node.js 20.10+ и pnpm 10.34.0.

```bash
corepack enable
pnpm install
```

## Перед изменением метода API

Прочитайте:

- [архитектуру](ARCHITECTURE.md);
- [источник контрактов Ozon](docs/OZON-SOURCE-OF-TRUTH.md);
- [источник контрактов Wildberries](docs/WB-SOURCE-OF-TRUTH.md);
- [процесс добавления endpoint](docs/ENDPOINT-WORKFLOW.md).

Не реализуйте контракт по памяти или только по неофициальному SDK.

## Требования к изменениям

- Сохраняйте публичную совместимость, если breaking change не согласован.
- Не добавляйте реальные credentials или данные продавца в fixtures.
- Для structured responses добавляйте SafeShape contract.
- Проверяйте request mapping, parsing и failure behavior.
- Обновляйте документацию вместе с кодом.

## Проверка

```bash
pnpm verify
```

Команда должна пройти полностью до отправки pull request.

`pnpm ci:check` дополнительно проверяет метаданные пакетов, упаковку и установку
в чистый consumer-проект. Проверка не зависит от того, опубликована ли текущая
версия в npm.

CI также проверяет типы, тесты и сборку с минимальной версией SafeShape из
диапазона `^x.y.z` в package manifests. Скрипт
`scripts/install-minimum-safe-shape.mjs` предназначен для одноразового checkout:
он меняет manifests и lockfile, фиксируя точную минимальную версию.

Перед публикацией дополнительно выполните `pnpm prepare:release`. Процесс
подготовки и публикации пакетов описан в
[руководстве по релизу](docs/RELEASING.md).

## Коммит и pull request

Опишите цель, изменение публичного API, риски и выполненные проверки. Для нового
или изменённого endpoint укажите ссылку на официальную документацию Ozon и дату
проверки.
