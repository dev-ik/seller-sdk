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
pnpm release:check
```

Команда должна пройти полностью до отправки pull request.

## Коммит и pull request

Опишите цель, изменение публичного API, риски и выполненные проверки. Для нового
или изменённого endpoint укажите ссылку на официальную документацию Ozon и дату
проверки.
