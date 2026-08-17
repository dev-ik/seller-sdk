# Справочник Ozon SDK

> Файл генерируется из проверенного Ozon endpoint manifest и официальной OpenAPI-спецификации. Не редактируйте его вручную.

Все методы доступны на `OzonClient` через перечисленные ниже области. Наведите курсор на метод или поле запроса в TypeScript-редакторе, чтобы увидеть описание, ограничения, пример и предупреждение об устаревании.

Покрытие: 461 методов в 38 областях.

## `access`

### `getRoles`

Получить список ролей и методов по API-ключу

`POST /v1/roles`

`await ozon.access.getRoles()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AccessAPI_RolesByToken)

## `actions`

Рекомендуемые алиасы без версии:

- `deleteAutoAddProducts` → `deleteAutoAddProductsV1`
- `listAutoAddProductCandidates` → `listAutoAddProductCandidatesV1`
- `listAutoAddProducts` → `listAutoAddProductsV1`
- `updateAutoAddProducts` → `updateAutoAddProductsV1`

### `deleteAutoAddProductsV1`

Удалить товары из автодобавления в акцию

`POST /v1/actions/auto-add/products/delete`

`await ozon.actions.deleteAutoAddProductsV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ActionsAutoAddProductsDelete)

### `listAutoAddProductCandidatesV1`

Получить список доступных товаров для автодобавления в акцию

`POST /v1/actions/auto-add/products/candidates`

`await ozon.actions.listAutoAddProductCandidatesV1(input)`

Обязательные поля запроса: `action_id`, `auto_add_date`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ActionsAutoAddProductsCandidates)

### `listAutoAddProductsV1`

Получить список товаров из автодобавления в акцию

`POST /v1/actions/auto-add/products/list`

`await ozon.actions.listAutoAddProductsV1(input)`

Обязательные поля запроса: `action_id`, `auto_add_date`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ActionsAutoAddProductsList)

### `updateAutoAddProductsV1`

Добавить или обновить товары в автодобавлении в акцию

`POST /v1/actions/auto-add/products/update`

`await ozon.actions.updateAutoAddProductsV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ActionsAutoAddProductsUpdate)

## `analytics`

Рекомендуемые алиасы без версии:

- `getAnalyticsData` → `getAnalyticsDataV1`
- `getAnalyticsManageStocks` → `getAnalyticsManageStocksV1` — устарел: 22 января 2026 года метод будет отключён. Переключитесь на /v1/analytics/stocks. Замена в SDK: `ozon.analytics.getAnalyticsStocks(...)` для `POST /v1/analytics/stocks`.
- `getAnalyticsProductQueryDetails` → `getAnalyticsProductQueryDetailsV1`
- `listAnalyticsProductQueries` → `listAnalyticsProductQueriesV1`

### `getAnalyticsDataV1`

Данные аналитики

`POST /v1/analytics/data`

`await ozon.analytics.getAnalyticsDataV1(input)`

Обязательные поля запроса: `date_from`, `date_to`, `dimension`, `metrics`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AnalyticsAPI_AnalyticsGetData)

### `getAnalyticsManageStocksV1`

Управление остатками

`POST /v1/analytics/manage/stocks`

`await ozon.analytics.getAnalyticsManageStocksV1(input)`

> Устарел: 22 января 2026 года метод будет отключён. Переключитесь на /v1/analytics/stocks. Замена в SDK: `ozon.analytics.getAnalyticsStocks(...)` для `POST /v1/analytics/stocks`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AnalyticsAPI_ManageStocks)

### `getAnalyticsProductQueryDetailsV1`

Получить детализацию запросов по товару

`POST /v1/analytics/product-queries/details`

`await ozon.analytics.getAnalyticsProductQueryDetailsV1(input)`

Обязательные поля запроса: `page_size`, `date_from`, `skus`, `limit_by_sku`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AnalyticsAPI_AnalyticsProductQueriesDetails)

### `getAnalyticsStockOnWarehouses`

Отчёт по остаткам и товарам

`POST /v2/analytics/stock_on_warehouses`

`await ozon.analytics.getAnalyticsStockOnWarehouses(input)`

Обязательные поля запроса: `limit`.

> Устарел: В будущем метод будет отключён. Переключитесь на /v1/analytics/stocks. Замена в SDK: `ozon.analytics.getAnalyticsStocks(...)` для `POST /v1/analytics/stocks`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AnalyticsAPI_AnalyticsGetStockOnWarehousesV2)

### `getAnalyticsStocks`

Получить аналитику по остаткам

`POST /v1/analytics/stocks`

`await ozon.analytics.getAnalyticsStocks(input)`

Обязательные поля запроса: `skus`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AnalyticsAPI_AnalyticsStocks)

### `getAnalyticsStocksTurnover`

Оборачиваемость товара

`POST /v1/analytics/turnover/stocks`

`await ozon.analytics.getAnalyticsStocksTurnover(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AnalyticsAPI_StocksTurnover)

### `listAnalyticsProductQueriesV1`

Получить информацию о запросах моих товаров

`POST /v1/analytics/product-queries`

`await ozon.analytics.listAnalyticsProductQueriesV1(input)`

Обязательные поля запроса: `page_size`, `date_from`, `skus`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AnalyticsAPI_AnalyticsProductQueries)

## `barcodes`

### `addProductBarcodes`

Привязать штрихкод к товару

`POST /v1/barcode/add`

`await ozon.barcodes.addProductBarcodes(input)`

Обязательные поля запроса: `barcodes`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/add-barcode)

### `generateProductBarcodes`

Создать штрихкод для товара

`POST /v1/barcode/generate`

`await ozon.barcodes.generateProductBarcodes(input)`

Обязательные поля запроса: `product_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/generate-barcode)

## `brands`

### `listBrandCertifications`

Список сертифицируемых брендов

`POST /v1/brand/company-certification/list`

`await ozon.brands.listBrandCertifications(input)`

Обязательные поля запроса: `page`, `page_size`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/BrandAPI_BrandCompanyCertificationList)

## `cancellations`

### `approveConditionalCancellation`

Подтвердить заявку на отмену rFBS

`POST /v2/conditional-cancellation/approve`

`await ozon.cancellations.approveConditionalCancellation(input)`

Обязательные поля запроса: `cancellation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CancellationAPI_ConditionalCancellationApproveV2)

### `listCancelReasons`

Причины отмены отправлений

`POST /v1/cancel-reason/list`

`await ozon.cancellations.listCancelReasons()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CancelReasonList)

### `listCancelReasonsByOrder`

Причины отмены заказа

`POST /v1/cancel-reason/list-by-order`

`await ozon.cancellations.listCancelReasonsByOrder(input)`

Обязательные поля запроса: `order_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CancelReasonListByOrder)

### `listCancelReasonsByPosting`

Причины отмены отправления

`POST /v1/cancel-reason/list-by-posting`

`await ozon.cancellations.listCancelReasonsByPosting(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CancelReasonAPI_CancelReasonListByPosting)

### `listConditionalCancellations`

Получить список заявок на отмену rFBS

`POST /v2/conditional-cancellation/list`

`await ozon.cancellations.listConditionalCancellations(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CancellationAPI_GetConditionalCancellationListV2)

### `rejectConditionalCancellation`

Отклонить заявку на отмену rFBS

`POST /v2/conditional-cancellation/reject`

`await ozon.cancellations.rejectConditionalCancellation(input)`

Обязательные поля запроса: `cancellation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CancellationAPI_ConditionalCancellationRejectV2)

## `cargoes`

Рекомендуемые алиасы без версии:

- `activateTransportCargoes` → `activateTransportCargoesV1`
- `bindTransportCargoes` → `bindTransportCargoesV1`
- `createTransportCargoes` → `createTransportCargoesV1`
- `createTransportLabels` → `createTransportLabelsV1`
- `createTransportLabelsByOrder` → `createTransportLabelsByOrderV1`
- `deleteCargoes` → `deleteCargoesV2`
- `getCargoes` → `getCargoesV2`
- `getCargoesDeleteStatus` → `getCargoesDeleteStatusV2`
- `getSupplyCargoes` → `getSupplyCargoesV1`
- `getTransportCargoesActivationStatus` → `getTransportCargoesActivationStatusV1`
- `getTransportCargoesBindStatus` → `getTransportCargoesBindStatusV1`
- `getTransportCargoesCreateStatus` → `getTransportCargoesCreateStatusV1`
- `getTransportLabelsByOrderStatus` → `getTransportLabelsByOrderStatusV1`
- `getTransportLabelsStatus` → `getTransportLabelsStatusV1`

### `activateTransportCargoesV1`

Включить или отключить транспортные грузоместа в поставке

`POST /v1/cargoes/transport/activate`

`await ozon.cargoes.activateTransportCargoesV1(input)`

Обязательные поля запроса: `is_transport`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesTransportActivate)

### `bindTransportCargoesV1`

Связать или отвязать грузоместа и транспортные грузоместа

`POST /v1/cargoes/transport/bind`

`await ozon.cargoes.bindTransportCargoesV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesTransportBind)

### `createTransportCargoesV1`

Создать транспортное грузоместо

`POST /v1/cargoes/transport/create`

`await ozon.cargoes.createTransportCargoesV1(input)`

Обязательные поля запроса: `supply_id`, `transport_cargoes`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesTransportCreate)

### `createTransportLabelsByOrderV1`

Сгенерировать этикетки для транспортных грузомест по идентификатору поставки

`POST /v1/cargoes/label/transport-by-order/create`

`await ozon.cargoes.createTransportLabelsByOrderV1(input)`

Обязательные поля запроса: `order_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesLabelTransportByOrderCreate)

### `createTransportLabelsV1`

Сгенерировать этикетки транспортных грузомест по идентификатору грузоместа

`POST /v1/cargoes/label/transport/create`

`await ozon.cargoes.createTransportLabelsV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesLabelTransportCreate)

### `deleteCargoesV2`

Удалить грузоместа и транспортные грузоместа в заявке на поставку

`POST /v2/cargoes/delete`

`await ozon.cargoes.deleteCargoesV2(input)`

Обязательные поля запроса: `transport_cargo_deletion_type`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesDeleteV2)

### `getCargoesDeleteStatusV2`

Получить информацию о статусе удаления грузомест и транспортных грузомест

`POST /v2/cargoes/delete/status`

`await ozon.cargoes.getCargoesDeleteStatusV2(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesDeleteStatusV2)

### `getCargoesV2`

Получить информацию о грузоместах

`POST /v2/cargoes/get`

`await ozon.cargoes.getCargoesV2(input)`

Обязательные поля запроса: `supplies`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesGetV2)

### `getSupplyCargoesV1`

Получить информацию о грузоместах в поставках

`POST /v1/cargoes/supplies/get`

`await ozon.cargoes.getSupplyCargoesV1(input)`

Обязательные поля запроса: `supply_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesSuppliesGet)

### `getTransportCargoesActivationStatusV1`

Получить статус включения или отключения транспортных грузомест

`POST /v1/cargoes/transport/activate/status`

`await ozon.cargoes.getTransportCargoesActivationStatusV1(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesTransportActivateStatus)

### `getTransportCargoesBindStatusV1`

Получить статус связывания или отвязывания грузомест и транспортных грузомест

`POST /v1/cargoes/transport/bind/status`

`await ozon.cargoes.getTransportCargoesBindStatusV1(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesTransportBindStatus)

### `getTransportCargoesCreateStatusV1`

Получить статус создания транспортного грузоместа

`POST /v1/cargoes/transport/create/status`

`await ozon.cargoes.getTransportCargoesCreateStatusV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesTransportCreateStatus)

### `getTransportLabelsByOrderStatusV1`

Получить статус генерации этикеток для транспортных грузомеcт по идентификатору поставки

`POST /v1/cargoes/label/transport-by-order/status`

`await ozon.cargoes.getTransportLabelsByOrderStatusV1(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesLabelTransportByOrderStatus)

### `getTransportLabelsStatusV1`

Получить статус генерации этикеток транспортных грузомест по идентификатору грузоместа

`POST /v1/cargoes/label/transport/status`

`await ozon.cargoes.getTransportLabelsStatusV1(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesLabelTransportStatus)

## `carriages`

Рекомендуемые алиасы без версии:

- `approveCarriageContainers` → `approveCarriageContainersV1`
- `cancelCarriageContainers` → `cancelCarriageContainersV1`
- `createCarriageContainers` → `createCarriageContainersV1`
- `fillCarriageContainer` → `fillCarriageContainerV1`
- `getCarriageContainer` → `getCarriageContainerV1`
- `getCarriageContainerDocuments` → `getCarriageContainerDocumentsV1`
- `getCarriageContainerLabels` → `getCarriageContainerLabelsV1`
- `getCarriageContainerStatuses` → `getCarriageContainerStatusesV1`
- `getCarriageContainerTask` → `getCarriageContainerTaskV1`
- `listCarriageContainers` → `listCarriageContainersV1`
- `placeCarriageContainersInto` → `placeCarriageContainersIntoV1`
- `removeCarriageContainerPostings` → `removeCarriageContainerPostingsV1`
- `removeCarriageContainersFrom` → `removeCarriageContainersFromV1`

### `approveCarriageContainersV1`

Подтвердить состав грузоместа

`POST /v1/carriage/container/approve`

`await ozon.carriages.approveCarriageContainersV1(input)`

Обязательные поля запроса: `container_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerApprove)

### `cancelCarriageContainersV1`

Отменить грузоместо

`POST /v1/carriage/container/cancel`

`await ozon.carriages.cancelCarriageContainersV1(input)`

Обязательные поля запроса: `container_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerCancel)

### `createCarriageContainersV1`

Создать грузоместо

`POST /v1/carriage/container/create`

`await ozon.carriages.createCarriageContainersV1(input)`

Обязательные поля запроса: `cargo_type`, `containers_count`, `sort_type`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerCreate)

### `fillCarriageContainerV1`

Наполнить грузоместо отправлениями

`POST /v1/carriage/container/fill`

`await ozon.carriages.fillCarriageContainerV1(input)`

Обязательные поля запроса: `container_id`, `posting_numbers`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerFill)

### `getCarriageContainerDocumentsV1`

Получить документы по грузоместам — ТрН и лист отгрузки

`POST /v1/carriage/container/document/get`

`await ozon.carriages.getCarriageContainerDocumentsV1(input)`

Обязательные поля запроса: `container_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerDocumentGet)

### `getCarriageContainerLabelsV1`

Получить этикетку по грузоместам

`POST /v1/carriage/container/label/get`

`await ozon.carriages.getCarriageContainerLabelsV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerLabelGet)

### `getCarriageContainerStatusesV1`

Получить статус грузомест FBS

`POST /v1/carriage/container/status/get`

`await ozon.carriages.getCarriageContainerStatusesV1(input)`

Обязательные поля запроса: `container_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerStatusGet)

### `getCarriageContainerTaskV1`

Получить статус задачи грузового места

`POST /v1/carriage/container/task/info`

`await ozon.carriages.getCarriageContainerTaskV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerTaskInfo)

### `getCarriageContainerV1`

Получить информацию о грузоместах

`POST /v1/carriage/container/get`

`await ozon.carriages.getCarriageContainerV1(input)`

Обязательные поля запроса: `container_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerGet)

### `listCarriageContainersV1`

Получить список грузомест

`POST /v1/carriage/container/list`

`await ozon.carriages.listCarriageContainersV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerList)

### `placeCarriageContainersIntoV1`

Разместить коробки на палете

`POST /v1/carriage/container/place-into`

`await ozon.carriages.placeCarriageContainersIntoV1(input)`

Обязательные поля запроса: `child_container_ids`, `parent_container_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerPlaceInto)

### `removeCarriageContainerPostingsV1`

Убрать отправления из грузоместа

`POST /v1/carriage/container/remove-postings`

`await ozon.carriages.removeCarriageContainerPostingsV1(input)`

Обязательные поля запроса: `container_id`, `posting_numbers`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerRemovePostings)

### `removeCarriageContainersFromV1`

Убрать коробки с палеты

`POST /v1/carriage/container/remove-from`

`await ozon.carriages.removeCarriageContainersFromV1(input)`

Обязательные поля запроса: `child_container_ids`, `parent_container_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageContainerRemoveFrom)

## `categories`

### `getDescriptionCategoryAttributes`

Список характеристик категории

`POST /v1/description-category/attribute`

`await ozon.categories.getDescriptionCategoryAttributes(input)`

Обязательные поля запроса: `description_category_id`, `type_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DescriptionCategoryAPI_GetAttributes)

### `getDescriptionCategoryAttributeValues`

Справочник значений характеристики

`POST /v1/description-category/attribute/values`

`await ozon.categories.getDescriptionCategoryAttributeValues(input)`

Обязательные поля запроса: `attribute_id`, `description_category_id`, `limit`, `type_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DescriptionCategoryAPI_GetAttributeValues)

### `getDescriptionCategoryTree`

Дерево категорий и типов товаров

`POST /v1/description-category/tree`

`await ozon.categories.getDescriptionCategoryTree(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DescriptionCategoryAPI_GetTree)

### `searchDescriptionCategoryAttributeValues`

Поиск по справочным значениям характеристики

`POST /v1/description-category/attribute/values/search`

`await ozon.categories.searchDescriptionCategoryAttributeValues(input)`

Обязательные поля запроса: `attribute_id`, `description_category_id`, `limit`, `type_id`, `value`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DescriptionCategoryAPI_SearchAttributeValues)

## `chats`

Рекомендуемые алиасы без версии:

- `getChatHistory` → `getChatHistoryV3`
- `listChats` → `listChatsV3`
- `readChat` → `readChatV2`
- `sendChatFile` → `sendChatFileV1`
- `sendChatMessage` → `sendChatMessageV1`
- `startChat` → `startChatV1`

### `getChatHistoryV3`

История чата

`POST /v3/chat/history`

`await ozon.chats.getChatHistoryV3(input)`

Обязательные поля запроса: `chat_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ChatAPI_ChatHistoryV3)

### `listChatsV3`

Список чатов

`POST /v3/chat/list`

`await ozon.chats.listChatsV3(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ChatAPI_ChatListV3)

### `readChatV2`

Отметить сообщения как прочитанные

`POST /v2/chat/read`

`await ozon.chats.readChatV2(input)`

Обязательные поля запроса: `chat_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ChatAPI_ChatReadV2)

### `sendChatFileV1`

Отправить файл

`POST /v1/chat/send/file`

`await ozon.chats.sendChatFileV1(input)`

Обязательные поля запроса: `chat_id`, `base64_content`, `name`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ChatAPI_ChatSendFile)

### `sendChatMessageV1`

Отправить сообщение

`POST /v1/chat/send/message`

`await ozon.chats.sendChatMessageV1(input)`

Обязательные поля запроса: `chat_id`, `text`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ChatAPI_ChatSendMessage)

### `startChatV1`

Создать новый чат

`POST /v1/chat/start`

`await ozon.chats.startChatV1(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ChatAPI_ChatStart)

## `deliveries`

Рекомендуемые алиасы без версии:

- `checkDeliveryAvailability` → `checkDeliveryAvailabilityV1`
- `checkoutDelivery` → `checkoutDeliveryV2`
- `getDeliveryMap` → `getDeliveryMapV1`
- `getDeliveryPointInfo` → `getDeliveryPointInfoV1`
- `listDeliveryPoints` → `listDeliveryPointsV1`
- `listFbsCarriageDeliveries` → `listFbsCarriageDeliveriesV2`

### `approveFbsCarriage`

Подтверждение отгрузки

`POST /v1/carriage/approve`

`await ozon.deliveries.approveFbsCarriage(input)`

Обязательные поля запроса: `carriage_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageAPI_CarriageApprove)

### `cancelFbsCarriage`

Удаление отгрузки

`POST /v1/carriage/cancel`

`await ozon.deliveries.cancelFbsCarriage(input)`

Обязательные поля запроса: `carriage_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageAPI_CarriageCancel)

### `checkDeliveryAvailabilityV1`

Проверить доступность доставки для покупателя

`POST /v1/delivery/check`

`await ozon.deliveries.checkDeliveryAvailabilityV1(input)`

Обязательные поля запроса: `client_phone`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DeliveryCheck)

### `checkoutDeliveryV2`

Получить доступные варианты доставки

`POST /v2/delivery/checkout`

`await ozon.deliveries.checkoutDeliveryV2(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DeliveryCheckout)

### `createFbsCarriage`

Создание отгрузки

`POST /v1/carriage/create`

`await ozon.deliveries.createFbsCarriage(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageAPI_CarriageCreate)

### `getDeliveryMapV1`

Отрисовать точки на карте

`POST /v1/delivery/map`

`await ozon.deliveries.getDeliveryMapV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DeliveryMap)

### `getDeliveryPointInfoV1`

Получить информацию о точке самовывоза

`POST /v1/delivery/point/info`

`await ozon.deliveries.getDeliveryPointInfoV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DeliveryPointInfo)

### `getFbsCarriage`

Информация о перевозке

`POST /v1/carriage/get`

`await ozon.deliveries.getFbsCarriage(input)`

Обязательные поля запроса: `carriage_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageGet)

### `getFbsCarriageDiscrepancyAct`

Получить акт о расхождениях по отгрузке FBS

`POST /v1/carriage/act-discrepancy/pdf`

`await ozon.deliveries.getFbsCarriageDiscrepancyAct(input)`

Обязательные поля запроса: `carriage_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageActDiscrepancyPDF)

### `getFbsCarriageEttnStatus`

Получить статус проверки электронной ТТН на прослеживаемой перевозке FBS

`POST /v1/carriage/ettn/status`

`await ozon.deliveries.getFbsCarriageEttnStatus(input)`

Обязательные поля запроса: `carriage_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageEttnStatus)

### `listAvailableFbsCarriages`

Список доступных перевозок

`POST /v1/posting/carriage-available/list`

`await ozon.deliveries.listAvailableFbsCarriages(input)`

Обязательные поля запроса: `delivery_method_id`.

> Устарел: 20 марта 2026 года отключим метод. Переключитесь на /v2/carriage/delivery/list. Замена в SDK: `ozon.deliveries.listFbsCarriageDeliveriesV2(...)` для `POST /v2/carriage/delivery/list`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetCarriageAvailableList)

### `listDeliveryPointsV1`

Получить список точек самовывоза

`POST /v1/delivery/point/list`

`await ozon.deliveries.listDeliveryPointsV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DeliveryAPI_DeliveryPointList)

### `listFbsAssemblyCarriagePostings`

Получить список отправлений в отгрузке

`POST /v1/assembly/carriage/posting/list`

`await ozon.deliveries.listFbsAssemblyCarriagePostings(input)`

Обязательные поля запроса: `filter`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AssemblyCarriagePostingList)

### `listFbsAssemblyCarriageProducts`

Получить список товаров в отгрузке

`POST /v1/assembly/carriage/product/list`

`await ozon.deliveries.listFbsAssemblyCarriageProducts(input)`

Обязательные поля запроса: `filter`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AssemblyCarriageProductList)

### `listFbsAssemblyPostings`

Получить список отправлений

`POST /v1/assembly/fbs/posting/list`

`await ozon.deliveries.listFbsAssemblyPostings(input)`

Обязательные поля запроса: `filter`, `limit`, `sort_dir`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AssemblyFbsPostingList)

### `listFbsAssemblyProducts`

Получить список товаров в отправлениях

`POST /v1/assembly/fbs/product/list`

`await ozon.deliveries.listFbsAssemblyProducts(input)`

Обязательные поля запроса: `filter`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/AssemblyFbsProductList)

### `listFbsCarriageDeliveriesV1`

Список методов доставки и отгрузок

`POST /v1/carriage/delivery/list`

`await ozon.deliveries.listFbsCarriageDeliveriesV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageAPI_CarriageDeliveryList)

### `listFbsCarriageDeliveriesV2`

Список методов доставки и отгрузок

`POST /v2/carriage/delivery/list`

`await ozon.deliveries.listFbsCarriageDeliveriesV2(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageAPI_CarriageDeliveryListV2)

### `setFbsCarriagePostings`

Изменение состава отгрузки

`POST /v1/carriage/set-postings`

`await ozon.deliveries.setFbsCarriagePostings(input)`

Обязательные поля запроса: `carriage_id`, `posting_numbers`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CarriageAPI_SetPostings)

## `deliveryMethods`

Рекомендуемые алиасы без версии:

- `listDeliveryMethods` → `listDeliveryMethodsV2`

### `getDeliveryMethodReturnSettings`

Получить информацию по возвратным настройкам rFBS и rFBS Express

`POST /v1/delivery-method/return/settings/get`

`await ozon.deliveryMethods.getDeliveryMethodReturnSettings(input)`

Обязательные поля запроса: `delivery_method_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetDeliveryMethodReturnSettingsV1)

### `listDeliveryMethodsV1`

Список методов доставки склада

`POST /v1/delivery-method/list`

`await ozon.deliveryMethods.listDeliveryMethodsV1(input)`

Обязательные поля запроса: `limit`.

> Устарел: Метод устаревает и будет отключён 7 апреля 2026 года. Переключитесь на /v2/delivery-method/list. Замена в SDK: `ozon.deliveryMethods.listDeliveryMethodsV2(...)` для `POST /v2/delivery-method/list`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseAPI_DeliveryMethodList)

### `listDeliveryMethodsV2`

Список методов доставки realFBS-склада

`POST /v2/delivery-method/list`

`await ozon.deliveryMethods.listDeliveryMethodsV2(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseAPI_DeliveryMethodListV2)

## `digital`

### `importDigitalProductStocks`

Обновить количество цифровых товаров

`POST /v1/product/digital/stocks/import`

`await ozon.digital.importDigitalProductStocks(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DigitalProductAPI_StocksImport)

### `listDigitalPostings`

Получить список отправлений

`POST /v1/posting/digital/list`

`await ozon.digital.listDigitalPostings(input)`

> Устарел: С 31 августа 2026 года метод будет отключён. Переключитесь на /v2/posting/digital/list. Замена в SDK: `ozon.digital.listDigitalPostingsV2(...)` для `POST /v2/posting/digital/list`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ListPostingCodes)

### `listDigitalPostingsV2`

Получить список отправлений

`POST /v2/posting/digital/list`

`await ozon.digital.listDigitalPostingsV2(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingDigitalList)

### `uploadDigitalPostingCodes`

Загрузить коды цифровых товаров для отправления

`POST /v1/posting/digital/codes/upload`

`await ozon.digital.uploadDigitalPostingCodes(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/UploadPostingCodes)

## `fbp`

Рекомендуемые алиасы без версии:

- `cancelFbpDirectOrder` → `cancelFbpDirectOrderV1`
- `cancelFbpDropOffOrder` → `cancelFbpDropOffOrderV1`
- `cancelFbpPickupOrder` → `cancelFbpPickupOrderV1`
- `createFbpAcceptanceAct` → `createFbpAcceptanceActV1`
- `createFbpConsignmentNote` → `createFbpConsignmentNoteV1`
- `createFbpDirectDraft` → `createFbpDirectDraftV1`
- `createFbpDirectSellerDeliveryDraft` → `createFbpDirectSellerDeliveryDraftV1`
- `createFbpDirectTplDeliveryDraft` → `createFbpDirectTplDeliveryDraftV1`
- `createFbpDropOffDraft` → `createFbpDropOffDraftV1`
- `createFbpLabels` → `createFbpLabelsV1`
- `createFbpPickupDraft` → `createFbpPickupDraftV1`
- `deleteFbpDirectDraft` → `deleteFbpDirectDraftV1`
- `deleteFbpDropOffDraft` → `deleteFbpDropOffDraftV1`
- `deleteFbpPickupDraft` → `deleteFbpPickupDraftV1`
- `editFbpDirectOrderSellerDelivery` → `editFbpDirectOrderSellerDeliveryV1`
- `editFbpDirectOrderTimeslot` → `editFbpDirectOrderTimeslotV1`
- `editFbpDirectSellerDeliveryDraft` → `editFbpDirectSellerDeliveryDraftV1`
- `editFbpDirectTimeslot` → `editFbpDirectTimeslotV1`
- `editFbpDirectTplDeliveryDraft` → `editFbpDirectTplDeliveryDraftV1`
- `editFbpDropOffDelivery` → `editFbpDropOffDeliveryV1`
- `editFbpDropOffOrderDelivery` → `editFbpDropOffOrderDeliveryV1`
- `editFbpPickupDraftDelivery` → `editFbpPickupDraftDeliveryV1`
- `editFbpPickupOrderDelivery` → `editFbpPickupOrderDeliveryV1`
- `getFbpAcceptanceAct` → `getFbpAcceptanceActV1`
- `getFbpArchiveSupply` → `getFbpArchiveSupplyV1`
- `getFbpConsignmentNote` → `getFbpConsignmentNoteV1`
- `getFbpDirectTimeslots` → `getFbpDirectTimeslotsV1`
- `getFbpDraft` → `getFbpDraftV1`
- `getFbpDropOffOrderTimetable` → `getFbpDropOffOrderTimetableV1`
- `getFbpDropOffPointTimetable` → `getFbpDropOffPointTimetableV1`
- `getFbpLabels` → `getFbpLabelsV1`
- `getFbpOrder` → `getFbpOrderV1`
- `listFbpArchiveSupplies` → `listFbpArchiveSuppliesV1`
- `listFbpDirectOrderTimeslots` → `listFbpDirectOrderTimeslotsV1`
- `listFbpDrafts` → `listFbpDraftsV1`
- `listFbpDropOffPoints` → `listFbpDropOffPointsV1`
- `listFbpDropOffProvinces` → `listFbpDropOffProvincesV1`
- `listFbpOrders` → `listFbpOrdersV1`
- `listFbpWarehouses` → `listFbpWarehousesV1`
- `registerFbpDirectDraft` → `registerFbpDirectDraftV1`
- `registerFbpDropOffDraft` → `registerFbpDropOffDraftV1`
- `registerFbpPickupDraft` → `registerFbpPickupDraftV1`
- `validateFbpDirectDraftProducts` → `validateFbpDirectDraftProductsV1`
- `validateFbpDropOffDraftProducts` → `validateFbpDropOffDraftProductsV1`
- `validateFbpPickupDraftProducts` → `validateFbpPickupDraftProductsV1`

### `cancelFbpDirectOrderV1`

Отменить поставку

`POST /v1/fbp/order/direct/cancel`

`await ozon.fbp.cancelFbpDirectOrderV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpOrderDirectCancel)

### `cancelFbpDropOffOrderV1`

Отменить поставку drop-off

`POST /v1/fbp/order/drop-off/cancel`

`await ozon.fbp.cancelFbpDropOffOrderV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpOrderDropOffCancel)

### `cancelFbpPickupOrderV1`

Отменить pick-up поставку

`POST /v1/fbp/order/pick-up/cancel`

`await ozon.fbp.cancelFbpPickupOrderV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpOrderPickUpCancel)

### `createFbpAcceptanceActV1`

Сгенерировать акт приёмки

`POST /v1/fbp/act-from/create`

`await ozon.fbp.createFbpAcceptanceActV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpCreateAct)

### `createFbpConsignmentNoteV1`

Сгенерировать транспортную накладную

`POST /v1/fbp/act-to/create`

`await ozon.fbp.createFbpConsignmentNoteV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpCreateConsignmentNote)

### `createFbpDirectDraftV1`

Создать черновик заявки на поставку без указания способа доставки

`POST /v1/fbp/draft/direct/create`

`await ozon.fbp.createFbpDirectDraftV1(input)`

Обязательные поля запроса: `bundle_id`, `delivery_details`, `package_units_count`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDirectCreate)

### `createFbpDirectSellerDeliveryDraftV1`

Создать черновик с доставкой силами продавца

`POST /v1/fbp/draft/direct/seller-dlv/create`

`await ozon.fbp.createFbpDirectSellerDeliveryDraftV1(input)`

Обязательные поля запроса: `bundle_id`, `delivery_details`, `package_units_count`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDirectSellerDlvCreate)

### `createFbpDirectTplDeliveryDraftV1`

Создать черновик заявки на доставку сторонней транспортной компанией

`POST /v1/fbp/draft/direct/tpl-dlv/create`

`await ozon.fbp.createFbpDirectTplDeliveryDraftV1(input)`

Обязательные поля запроса: `bundle_id`, `delivery_details`, `package_units_count`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpDraftDirectTplDlvCreate)

### `createFbpDropOffDraftV1`

Создать черновик для доставки в drop-off пункт

`POST /v1/fbp/draft/drop-off/create`

`await ozon.fbp.createFbpDropOffDraftV1(input)`

Обязательные поля запроса: `bundle_id`, `delivery_details`, `package_units_count`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDropOffCreate)

### `createFbpLabelsV1`

Cоздать задание на генерацию этикеток

`POST /v1/fbp/label/create`

`await ozon.fbp.createFbpLabelsV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpCreateLabel)

### `createFbpPickupDraftV1`

Создать черновик заявки на pick-up поставку

`POST /v1/fbp/draft/pick-up/create`

`await ozon.fbp.createFbpPickupDraftV1(input)`

Обязательные поля запроса: `bundle_id`, `delivery_details`, `package_units_count`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpDraftPickupCreate)

### `deleteFbpDirectDraftV1`

Удалить черновик заявки на поставку

`POST /v1/fbp/draft/direct/delete`

`await ozon.fbp.deleteFbpDirectDraftV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDirectDelete)

### `deleteFbpDropOffDraftV1`

Удалить черновик для доставки в drop-off пункт

`POST /v1/fbp/draft/drop-off/delete`

`await ozon.fbp.deleteFbpDropOffDraftV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDropOffDelete)

### `deleteFbpPickupDraftV1`

Отменить черновик заявки на pick-up поставку

`POST /v1/fbp/draft/pick-up/delete`

`await ozon.fbp.deleteFbpPickupDraftV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpDraftPickUpDelete)

### `editFbpDirectOrderSellerDeliveryV1`

Обновить информацию о доставке силами продавца

`POST /v1/fbp/order/direct/seller-dlv/edit`

`await ozon.fbp.editFbpDirectOrderSellerDeliveryV1(input)`

Обязательные поля запроса: `driver_name`, `row_version`, `supply_id`, `vehicle_number`, `vehicle_type`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpOrderDirectSellerDlvEdit)

### `editFbpDirectOrderTimeslotV1`

Отредактировать таймслот в заявке на поставку

`POST /v1/fbp/order/direct/timeslot/edit`

`await ozon.fbp.editFbpDirectOrderTimeslotV1(input)`

Обязательные поля запроса: `row_version`, `supply_id`, `timeslot_start`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpEditTimeslot)

### `editFbpDirectSellerDeliveryDraftV1`

Обновить информацию о доставке силами продавца в черновике

`POST /v1/fbp/draft/direct/seller-dlv/edit`

`await ozon.fbp.editFbpDirectSellerDeliveryDraftV1(input)`

Обязательные поля запроса: `driver_name`, `row_version`, `supply_id`, `vehicle_number`, `vehicle_type`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDirectSellerDlvEdit)

### `editFbpDirectTimeslotV1`

Отредактировать таймслот в черновике

`POST /v1/fbp/draft/direct/timeslot/edit`

`await ozon.fbp.editFbpDirectTimeslotV1(input)`

Обязательные поля запроса: `row_version`, `supply_id`, `timeslot_start`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDirectTimeslotEdit)

### `editFbpDirectTplDeliveryDraftV1`

Редактировать черновик поставки со способом доставки сторонней транспортной компанией

`POST /v1/fbp/draft/direct/tpl-dlv/edit`

`await ozon.fbp.editFbpDirectTplDeliveryDraftV1(input)`

Обязательные поля запроса: `row_version`, `supply_id`, `tracking_number`, `transport_company_name`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpDraftDirectTplDlvEdit)

### `editFbpDropOffDeliveryV1`

Отредактировать детали доставки для drop-off черновика

`POST /v1/fbp/draft/drop-off/dlv/edit`

`await ozon.fbp.editFbpDropOffDeliveryV1(input)`

Обязательные поля запроса: `drop_off_date`, `drop_off_point_id`, `drop_off_province_uuid`, `row_version`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDropOffDlvEdit)

### `editFbpDropOffOrderDeliveryV1`

Отредактировать информацию о поставке на drop-off пункт

`POST /v1/fbp/order/drop-off/dlv/edit`

`await ozon.fbp.editFbpDropOffOrderDeliveryV1(input)`

Обязательные поля запроса: `drop_off_date`, `row_version`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpOrderDropOffDlvEdit)

### `editFbpPickupDraftDeliveryV1`

Изменить черновик заявки на pick-up поставку

`POST /v1/fbp/draft/pick-up/dlv/edit`

`await ozon.fbp.editFbpPickupDraftDeliveryV1(input)`

Обязательные поля запроса: `row_version`, `supply_id`, `pickup_details`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpDraftPickupDlvEdit)

### `editFbpPickupOrderDeliveryV1`

Изменить данные о точке забора

`POST /v1/fbp/order/pick-up/dlv/edit`

`await ozon.fbp.editFbpPickupOrderDeliveryV1(input)`

Обязательные поля запроса: `pickup_details`, `row_version`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpOrderPickUpDlvEdit)

### `getFbpAcceptanceActV1`

Получить статус генерации акта приёмки

`POST /v1/fbp/act-from/get`

`await ozon.fbp.getFbpAcceptanceActV1(input)`

Обязательные поля запроса: `file_uuid`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpCheckActState)

### `getFbpArchiveSupplyV1`

Получить информацию о завершённой поставке

`POST /v1/fbp/archive/get`

`await ozon.fbp.getFbpArchiveSupplyV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpArchiveGet)

### `getFbpConsignmentNoteV1`

Получить статус генерации транспортной накладной

`POST /v1/fbp/act-to/get`

`await ozon.fbp.getFbpConsignmentNoteV1(input)`

Обязательные поля запроса: `code`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpCheckConsignmentNoteState)

### `getFbpDirectTimeslotsV1`

Получить список таймслотов для прямой поставки

`POST /v1/fbp/draft/direct/timeslot/get`

`await ozon.fbp.getFbpDirectTimeslotsV1(input)`

Обязательные поля запроса: `bundle_id`, `interval_end`, `interval_start`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDirectGetTimeslot)

### `getFbpDraftV1`

Получить информацию о черновике поставки

`POST /v1/fbp/draft/get`

`await ozon.fbp.getFbpDraftV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpDraftGet)

### `getFbpDropOffOrderTimetableV1`

Получить график работы drop-off пункта

`POST /v1/fbp/order/drop-off/timetable`

`await ozon.fbp.getFbpDropOffOrderTimetableV1(input)`

Обязательные поля запроса: `drop_off_point_id`, `province_uuid`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpOrderDropOffTimetable)

### `getFbpDropOffPointTimetableV1`

Получить расписание работы drop-off пункта

`POST /v1/fbp/draft/drop-off/point/timetable`

`await ozon.fbp.getFbpDropOffPointTimetableV1(input)`

Обязательные поля запроса: `drop_off_point_id`, `province_uuid`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDropOffPointTimetable)

### `getFbpLabelsV1`

Получить статус задания на генерацию этикеток

`POST /v1/fbp/label/get`

`await ozon.fbp.getFbpLabelsV1(input)`

Обязательные поля запроса: `code`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpGetLabel)

### `getFbpOrderV1`

Получить информацию о конкретной поставке

`POST /v1/fbp/order/get`

`await ozon.fbp.getFbpOrderV1(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpOrderGet)

### `listFbpArchiveSuppliesV1`

Получить список завершённых поставок

`POST /v1/fbp/archive/list`

`await ozon.fbp.listFbpArchiveSuppliesV1(input)`

Обязательные поля запроса: `count`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpArchiveList)

### `listFbpDirectOrderTimeslotsV1`

Получить список таймслотов для поставки

`POST /v1/fbp/order/direct/timeslot/list`

`await ozon.fbp.listFbpDirectOrderTimeslotsV1(input)`

Обязательные поля запроса: `interval_end`, `interval_start`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpAvailableTimeslotList)

### `listFbpDraftsV1`

Список черновиков поставки

`POST /v1/fbp/draft/list`

`await ozon.fbp.listFbpDraftsV1(input)`

Обязательные поля запроса: `count`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpDraftList)

### `listFbpDropOffPointsV1`

Получить список drop-off пунктов в провинции

`POST /v1/fbp/draft/drop-off/point/list`

`await ozon.fbp.listFbpDropOffPointsV1(input)`

Обязательные поля запроса: `page_size`, `province_uuid`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDropOffPointList)

### `listFbpDropOffProvincesV1`

Получить список провинций

`POST /v1/fbp/draft/drop-off/province/list`

`await ozon.fbp.listFbpDropOffProvincesV1(input)`

Обязательные поля запроса: `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDropOffProvinceList)

### `listFbpOrdersV1`

Получить список поставок

`POST /v1/fbp/order/list`

`await ozon.fbp.listFbpOrdersV1(input)`

Обязательные поля запроса: `count`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpOrderList)

### `listFbpWarehousesV1`

Получить список партнёрских складов

`POST /v1/fbp/warehouse/list`

`await ozon.fbp.listFbpWarehousesV1()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpWarehouseList)

### `registerFbpDirectDraftV1`

Перевести черновик в действующую поставку

`POST /v1/fbp/draft/direct/registrate`

`await ozon.fbp.registerFbpDirectDraftV1(input)`

Обязательные поля запроса: `row_version`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDirectRegistrate)

### `registerFbpDropOffDraftV1`

Перевести черновик в действующую поставку

`POST /v1/fbp/draft/drop-off/registrate`

`await ozon.fbp.registerFbpDropOffDraftV1(input)`

Обязательные поля запроса: `row_version`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDropOffRegistrate)

### `registerFbpPickupDraftV1`

Перевести черновик в действующую поставку

`POST /v1/fbp/draft/pick-up/registrate`

`await ozon.fbp.registerFbpPickupDraftV1(input)`

Обязательные поля запроса: `row_version`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftPickUpRegistrate)

### `validateFbpDirectDraftProductsV1`

Проверить список товаров для склада партнёра

`POST /v1/fbp/draft/direct/product/validate`

`await ozon.fbp.validateFbpDirectDraftProductsV1(input)`

Обязательные поля запроса: `skus`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDirectProductValidate)

### `validateFbpDropOffDraftProductsV1`

Проверить список товаров, которые склад партнёра может принять

`POST /v1/fbp/draft/drop-off/product/validate`

`await ozon.fbp.validateFbpDropOffDraftProductsV1(input)`

Обязательные поля запроса: `skus`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpDraftDropOffProductValidate)

### `validateFbpPickupDraftProductsV1`

Провалидировать список товаров для pick-up поставки

`POST /v1/fbp/draft/pick-up/product/validate`

`await ozon.fbp.validateFbpPickupDraftProductsV1(input)`

Обязательные поля запроса: `skus`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbpAPI_FbpDraftPickUpProductValidate)

## `finance`

Рекомендуемые алиасы без версии:

- `createB2BSalesReport` → `createB2BSalesReportV1`
- `createCompensationReport` → `createCompensationReportV1`
- `createDecompensationReport` → `createDecompensationReportV1`
- `createMutualSettlementReport` → `createMutualSettlementReportV1`
- `getB2BSalesJsonReport` → `getB2BSalesJsonReportV1`
- `getFinanceAccrualByDay` → `getFinanceAccrualByDayV1`
- `getFinanceAccrualPostings` → `getFinanceAccrualPostingsV1`
- `getFinanceBalance` → `getFinanceBalanceV1`
- `getFinanceProductsBuyout` → `getFinanceProductsBuyoutV1`
- `getFinanceTransactionTotals` → `getFinanceTransactionTotalsV3` — устарел: Метод устаревает и будет отключён 8 сентября 2026 года. Переключитесь на /v1/finance/accrual/postings, /v1/finance/accrual/types, /v1/finance/accrual/by-day. Данные могут не соответствовать информации в личном кабинете. Замены в SDK: `ozon.finance.getFinanceAccrualPostingsV1(...)` для `POST /v1/finance/accrual/postings`; `ozon.finance.listFinanceAccrualTypesV1(...)` для `POST /v1/finance/accrual/types`; `ozon.finance.getFinanceAccrualByDayV1(...)` для `POST /v1/finance/accrual/by-day`.
- `getRealizationPostingReport` → `getRealizationPostingReportV1`
- `getRealizationReport` → `getRealizationReportV2`
- `getRealizationReportByDay` → `getRealizationReportByDayV1`
- `listFinanceAccrualTypes` → `listFinanceAccrualTypesV1`
- `listFinanceCashFlow` → `listFinanceCashFlowV1`
- `listFinanceTransactions` → `listFinanceTransactionsV3` — устарел: Метод устаревает и будет отключён 8 сентября 2026 года. Переключитесь на /v1/finance/accrual/postings, /v1/finance/accrual/types, /v1/finance/accrual/by-day. Используйте метод с последовательной отправкой запросов. Данные могут не соответствовать информации в личном кабинете. Замены в SDK: `ozon.finance.getFinanceAccrualPostingsV1(...)` для `POST /v1/finance/accrual/postings`; `ozon.finance.listFinanceAccrualTypesV1(...)` для `POST /v1/finance/accrual/types`; `ozon.finance.getFinanceAccrualByDayV1(...)` для `POST /v1/finance/accrual/by-day`.

### `createB2BSalesReportV1`

Реестр продаж юридическим лицам

`POST /v1/finance/document-b2b-sales`

`await ozon.finance.createB2BSalesReportV1(input)`

Обязательные поля запроса: `date`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_CreateDocumentB2BSalesReport)

### `createCompensationReportV1`

Отчёт о компенсациях

`POST /v1/finance/compensation`

`await ozon.finance.createCompensationReportV1(input)`

Обязательные поля запроса: `date`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_GetCompensationReport)

### `createDecompensationReportV1`

Отчёт о декомпенсациях

`POST /v1/finance/decompensation`

`await ozon.finance.createDecompensationReportV1(input)`

Обязательные поля запроса: `date`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_GetDecompensationReport)

### `createMutualSettlementReportV1`

Отчёт о взаиморасчётах

`POST /v1/finance/mutual-settlement`

`await ozon.finance.createMutualSettlementReportV1(input)`

Обязательные поля запроса: `date`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_CreateMutualSettlementReport)

### `getB2BSalesJsonReportV1`

Реестр продаж юридическим лицам в JSON-формате

`POST /v1/finance/document-b2b-sales/json`

`await ozon.finance.getB2BSalesJsonReportV1(input)`

Обязательные поля запроса: `date`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_CreateDocumentB2BSalesJSONReport)

### `getFinanceAccrualByDayV1`

Получить начисления за день

`POST /v1/finance/accrual/by-day`

`await ozon.finance.getFinanceAccrualByDayV1(input)`

Обязательные поля запроса: `date`, `last_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetFinanceAccrualByDay)

### `getFinanceAccrualPostingsV1`

Получить начисления по отправлениям

`POST /v1/finance/accrual/postings`

`await ozon.finance.getFinanceAccrualPostingsV1(input)`

Обязательные поля запроса: `posting_numbers`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetFinanceAccrualPostings)

### `getFinanceBalanceV1`

Получить отчёт о балансе

`POST /v1/finance/balance`

`await ozon.finance.getFinanceBalanceV1(input)`

Обязательные поля запроса: `date_from`, `date_to`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetFinanceBalanceV1)

### `getFinanceProductsBuyoutV1`

Отчёт о выкупленных товарах

`POST /v1/finance/products/buyout`

`await ozon.finance.getFinanceProductsBuyoutV1(input)`

Обязательные поля запроса: `date_from`, `date_to`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetFinanceProductsBuyout)

### `getFinanceTransactionTotalsV3`

Суммы транзакций

`POST /v3/finance/transaction/totals`

`await ozon.finance.getFinanceTransactionTotalsV3(input)`

Обязательные поля запроса: `date|posting_number`.

> Устарел: Метод устаревает и будет отключён 8 сентября 2026 года. Переключитесь на /v1/finance/accrual/postings, /v1/finance/accrual/types, /v1/finance/accrual/by-day. Данные могут не соответствовать информации в личном кабинете. Замены в SDK: `ozon.finance.getFinanceAccrualPostingsV1(...)` для `POST /v1/finance/accrual/postings`; `ozon.finance.listFinanceAccrualTypesV1(...)` для `POST /v1/finance/accrual/types`; `ozon.finance.getFinanceAccrualByDayV1(...)` для `POST /v1/finance/accrual/by-day`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FinanceAPI_FinanceTransactionTotalV3)

### `getRealizationPostingReportV1`

Позаказный отчёт о реализации товаров

`POST /v1/finance/realization/posting`

`await ozon.finance.getRealizationPostingReportV1(input)`

Обязательные поля запроса: `month`, `year`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FinanceAPI_GetRealizationReportV1)

### `getRealizationReportByDayV1`

Отчёт о реализации товаров за день

`POST /v1/finance/realization/by-day`

`await ozon.finance.getRealizationReportByDayV1(input)`

Обязательные поля запроса: `day`, `month`, `year`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FinanceAPI_GetRealizationByDayReportV1)

### `getRealizationReportV2`

Отчёт о реализации товаров (версия 2)

`POST /v2/finance/realization`

`await ozon.finance.getRealizationReportV2(input)`

Обязательные поля запроса: `month`, `year`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FinanceAPI_GetRealizationReportV2)

### `listFinanceAccrualTypesV1`

Получить справочник начислений

`POST /v1/finance/accrual/types`

`await ozon.finance.listFinanceAccrualTypesV1()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetFinanceAccrualTypes)

### `listFinanceCashFlowV1`

Финансовый отчёт

`POST /v1/finance/cash-flow-statement/list`

`await ozon.finance.listFinanceCashFlowV1(input)`

Обязательные поля запроса: `page`, `page_size`, `date`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FinanceAPI_FinanceCashFlowStatementList)

### `listFinanceTransactionsV3`

Список транзакций

`POST /v3/finance/transaction/list`

`await ozon.finance.listFinanceTransactionsV3(input)`

Обязательные поля запроса: `page`, `page_size`.

> Устарел: Метод устаревает и будет отключён 8 сентября 2026 года. Переключитесь на /v1/finance/accrual/postings, /v1/finance/accrual/types, /v1/finance/accrual/by-day. Используйте метод с последовательной отправкой запросов. Данные могут не соответствовать информации в личном кабинете. Замены в SDK: `ozon.finance.getFinanceAccrualPostingsV1(...)` для `POST /v1/finance/accrual/postings`; `ozon.finance.listFinanceAccrualTypesV1(...)` для `POST /v1/finance/accrual/types`; `ozon.finance.getFinanceAccrualByDayV1(...)` для `POST /v1/finance/accrual/by-day`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FinanceAPI_FinanceTransactionListV3)

## `invoices`

### `createOrUpdateInvoice`

Создать или изменить счёт-фактуру

`POST /v2/invoice/create-or-update`

`await ozon.invoices.createOrUpdateInvoice(input)`

Обязательные поля запроса: `date`, `posting_number`, `url`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/InvoiceAPI_InvoiceCreateOrUpdateV2)

### `deleteInvoice`

Удалить ссылку на счёт-фактуру

`POST /v1/invoice/delete`

`await ozon.invoices.deleteInvoice(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/invoice_delete)

### `getInvoice`

Получить информацию о счёте-фактуре

`POST /v2/invoice/get`

`await ozon.invoices.getInvoice(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/invoice_getV2)

### `uploadInvoiceFile`

Загрузка счёта-фактуры

`POST /v1/invoice/file/upload`

`await ozon.invoices.uploadInvoiceFile(input)`

Обязательные поля запроса: `base64_content`, `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/invoice_upload)

## `notifications`

Рекомендуемые алиасы без версии:

- `checkNotification` → `checkNotificationV1`
- `deleteNotification` → `deleteNotificationV1`
- `enableNotification` → `enableNotificationV1`
- `listNotificationPushTypes` → `listNotificationPushTypesV1`
- `listNotifications` → `listNotificationsV1`
- `setNotification` → `setNotificationV1`
- `updateNotification` → `updateNotificationV1`

### `checkNotificationV1`

Проверить URL-адрес для уведомлений

`POST /v1/notification/check`

`await ozon.notifications.checkNotificationV1(input)`

Обязательные поля запроса: `url`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CheckNotification)

### `deleteNotificationV1`

Удалить URL-адрес для уведомлений

`POST /v1/notification/delete`

`await ozon.notifications.deleteNotificationV1(input)`

Обязательные поля запроса: `id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DeleteNotification)

### `enableNotificationV1`

Включить или выключить уведомления на URL-адрес

`POST /v1/notification/enable`

`await ozon.notifications.enableNotificationV1(input)`

Обязательные поля запроса: `id`, `enabled`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/EnableNotification)

### `listNotificationPushTypesV1`

Получить типы пуш-уведомлений

`POST /v1/notification/push-type/list`

`await ozon.notifications.listNotificationPushTypesV1()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetNotificationPushTypeList)

### `listNotificationsV1`

Получить информацию по подключённым URL-адресам

`POST /v1/notification/list`

`await ozon.notifications.listNotificationsV1()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/NotificationList)

### `setNotificationV1`

Подключить URL-адрес для уведомлений

`POST /v1/notification/set`

`await ozon.notifications.setNotificationV1(input)`

Обязательные поля запроса: `url`, `types`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SetNotification)

### `updateNotificationV1`

Изменить URL-адрес для уведомлений

`POST /v1/notification/update`

`await ozon.notifications.updateNotificationV1(input)`

Обязательные поля запроса: `id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/UpdateNotification)

## `orders`

### `cancelOrder`

Отменить заказ

`POST /v1/order/cancel`

`await ozon.orders.cancelOrder(input)`

Обязательные поля запроса: `order_number`, `reason_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/OrderAPI_OrderCancel)

### `checkOrderCancellation`

Проверить возможность отмены заказа

`POST /v1/order/cancel/check`

`await ozon.orders.checkOrderCancellation(input)`

Обязательные поля запроса: `order_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/OrderAPI_OrderCancelCheck)

### `createOrder`

Создать заказ

`POST /v2/order/create`

`await ozon.orders.createOrder(input)`

Обязательные поля запроса: `buyer`, `recipient`, `delivery`, `splits`, `delivery_schema`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/OrderAPI_OrderCreate)

### `getOrderCancellationStatus`

Получить статус отмены заказа

`POST /v1/order/cancel/status`

`await ozon.orders.getOrderCancellationStatus(input)`

Обязательные поля запроса: `order_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/OrderAPI_OrderCancelStatus)

## `passes`

### `createCarriagePasses`

Создать пропуск

`POST /v1/carriage/pass/create`

`await ozon.passes.createCarriagePasses(input)`

Обязательные поля запроса: `arrival_passes`, `carriage_id`, `arrival_passes[].driver_name`, `arrival_passes[].driver_phone`, `arrival_passes[].vehicle_license_plate`, `arrival_passes[].vehicle_model`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/carriagePassCreate)

### `createReturnPasses`

Создать пропуск для возврата

`POST /v1/return/pass/create`

`await ozon.passes.createReturnPasses(input)`

Обязательные поля запроса: `arrival_passes`, `arrival_passes[].arrival_time`, `arrival_passes[].driver_name`, `arrival_passes[].driver_phone`, `arrival_passes[].dropoff_point_id`, `arrival_passes[].vehicle_license_plate`, `arrival_passes[].vehicle_model`, `arrival_passes[].warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/returnPassCreate)

### `deleteCarriagePasses`

Удалить пропуск

`POST /v1/carriage/pass/delete`

`await ozon.passes.deleteCarriagePasses(input)`

Обязательные поля запроса: `arrival_pass_ids`, `carriage_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/carriagePassDelete)

### `deleteReturnPasses`

Удалить пропуск для возврата

`POST /v1/return/pass/delete`

`await ozon.passes.deleteReturnPasses(input)`

Обязательные поля запроса: `arrival_pass_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/returnPassDelete)

### `listPasses`

Список пропусков

`POST /v1/pass/list`

`await ozon.passes.listPasses(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PassList)

### `updateCarriagePasses`

Обновить пропуск

`POST /v1/carriage/pass/update`

`await ozon.passes.updateCarriagePasses(input)`

Обязательные поля запроса: `arrival_passes`, `carriage_id`, `arrival_passes[].id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/carriagePassUpdate)

### `updateReturnPasses`

Обновить пропуск для возврата

`POST /v1/return/pass/update`

`await ozon.passes.updateReturnPasses(input)`

Обязательные поля запроса: `arrival_passes`, `arrival_passes[].arrival_pass_id`, `arrival_passes[].arrival_time`, `arrival_passes[].driver_name`, `arrival_passes[].driver_phone`, `arrival_passes[].vehicle_license_plate`, `arrival_passes[].vehicle_model`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/returnPassUpdate)

## `polygons`

Рекомендуемые алиасы без версии:

- `bindDeliveryPolygon` → `bindDeliveryPolygonV2`
- `createDeliveryPolygon` → `createDeliveryPolygonV1`
- `deleteDeliveryPolygon` → `deleteDeliveryPolygonV1`
- `listDeliveryPolygons` → `listDeliveryPolygonsV1`
- `setDeliveryPolygonTime` → `setDeliveryPolygonTimeV1`
- `updateDeliveryPolygonCoordinates` → `updateDeliveryPolygonCoordinatesV1`

### `bindDeliveryPolygonV1`

Свяжите метод доставки с полигоном доставки

`POST /v1/polygon/bind`

`await ozon.polygons.bindDeliveryPolygonV1(input)`

Обязательные поля запроса: `delivery_method_id`, `polygons`, `warehouse_location`.

> Устарел: Метод устаревает и будет отключён в будущем. Переключитесь на /v2/polygon/bind. Замена в SDK: `ozon.polygons.bindDeliveryPolygonV2(...)` для `POST /v2/polygon/bind`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PolygonAPI_BindPolygon)

### `bindDeliveryPolygonV2`

Связать метод доставки с полигоном

`POST /v2/polygon/bind`

`await ozon.polygons.bindDeliveryPolygonV2(input)`

Обязательные поля запроса: `delivery_method_id`, `polygon_id`, `time`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PolygonBind)

### `createDeliveryPolygonV1`

Создайте полигон доставки

`POST /v1/polygon/create`

`await ozon.polygons.createDeliveryPolygonV1(input)`

Обязательные поля запроса: `coordinates`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PolygonAPI_CreatePolygon)

### `deleteDeliveryPolygonV1`

Удалить полигон из области доставки

`POST /v1/polygon/delete`

`await ozon.polygons.deleteDeliveryPolygonV1(input)`

Обязательные поля запроса: `delivery_method_id`, `polygon_id`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PolygonDelete)

### `listDeliveryPolygonsV1`

Получить список установленных полигонов на метод доставки

`POST /v1/polygon/list`

`await ozon.polygons.listDeliveryPolygonsV1(input)`

Обязательные поля запроса: `delivery_method_id`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PolygonList)

### `setDeliveryPolygonTimeV1`

Установить новое время доставки в полигоне

`POST /v1/polygon/time/set`

`await ozon.polygons.setDeliveryPolygonTimeV1(input)`

Обязательные поля запроса: `current_time`, `delivery_method_id`, `new_time`, `polygon_id`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PolygonTimeSet)

### `updateDeliveryPolygonCoordinatesV1`

Обновить координаты полигона доставки

`POST /v1/polygon/time/coordinates/update`

`await ozon.polygons.updateDeliveryPolygonCoordinatesV1(input)`

Обязательные поля запроса: `coordinates`, `delivery_method_id`, `polygon_id`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PolygonTimeCoordinatesUpdate)

## `postings`

Рекомендуемые алиасы без версии:

- `cancelFbsPosting` → `cancelFbsPostingV2`
- `cancelFbsPostingProducts` → `cancelFbsPostingProductsV2`
- `createFbsPackageLabelBatch` → `createFbsPackageLabelBatchV2`
- `createOrGetFbsPostingProductExemplars` → `createOrGetFbsPostingProductExemplarsV6`
- `getEtgbDeclarations` → `getEtgbDeclarationsV1`
- `getFboPosting` → `getFboPostingV2`
- `getFbpPosting` → `getFbpPostingV1`
- `getFbsPackageLabelBatch` → `getFbsPackageLabelBatchV1`
- `getFbsPosting` → `getFbsPostingV3`
- `getFbsPostingByBarcode` → `getFbsPostingByBarcodeV2`
- `getFbsPostingCancelReasons` → `getFbsPostingCancelReasonsV1`
- `getFbsPostingProductExemplarStatus` → `getFbsPostingProductExemplarStatusV5`
- `getFbsPostingRestrictions` → `getFbsPostingRestrictionsV1`
- `listFboPostings` → `listFboPostingsV3`
- `listFbpPostings` → `listFbpPostingsV1`
- `listFbsPostingCancelReasons` → `listFbsPostingCancelReasonsV2`
- `listFbsPostingProductCountries` → `listFbsPostingProductCountriesV2`
- `listFbsPostings` → `listFbsPostingsV4`
- `listUnfulfilledFbsPostings` → `listUnfulfilledFbsPostingsV4`
- `listUnpaidLegalProducts` → `listUnpaidLegalProductsV1`
- `openFbsPostingArbitration` → `openFbsPostingArbitrationV2`
- `printFbsPackageLabels` → `printFbsPackageLabelsV2`
- `setFbsPostingMultiboxQuantity` → `setFbsPostingMultiboxQuantityV3`
- `setFbsPostingProductCountry` → `setFbsPostingProductCountryV2`
- `setFbsPostingProductExemplars` → `setFbsPostingProductExemplarsV6`
- `setFbsPostingsAwaitingDelivery` → `setFbsPostingsAwaitingDeliveryV2`
- `shipFbsPosting` → `shipFbsPostingV4`
- `shipFbsPostingPackage` → `shipFbsPostingPackageV4`
- `validateFbsPostingProductExemplars` → `validateFbsPostingProductExemplarsV5`
- `verifyFbsPickupCode` → `verifyFbsPickupCodeV1`

### `cancelFboPosting`

Отменить отправление из заказа

`POST /v1/posting/cancel`

`await ozon.postings.cancelFboPosting(input)`

Обязательные поля запроса: `posting_number`, `reason_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingCancel)

### `cancelFbsPostingProductsV2`

Отменить отправку некоторых товаров в отправлении

`POST /v2/posting/fbs/product/cancel`

`await ozon.postings.cancelFbsPostingProductsV2(input)`

Обязательные поля запроса: `cancel_reason_id`, `cancel_reason_message`, `items`, `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_CancelFbsPostingProduct)

### `cancelFbsPostingV2`

Отменить отправление

`POST /v2/posting/fbs/cancel`

`await ozon.postings.cancelFbsPostingV2(input)`

Обязательные поля запроса: `cancel_reason_id`, `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_CancelFbsPosting)

### `createFbsAct`

Подтвердить отгрузку и создать документы

`POST /v2/posting/fbs/act/create`

`await ozon.postings.createFbsAct(input)`

Обязательные поля запроса: `delivery_method_id`.

> Устарел: Метод устаревает и будет отключён 7 сентября 2026. Переключитесь на /v1/carriage/create и /v1/carriage/approve. Замены в SDK: `ozon.deliveries.createFbsCarriage(...)` для `POST /v1/carriage/create`; `ozon.deliveries.approveFbsCarriage(...)` для `POST /v1/carriage/approve`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingFBSActCreate)

### `createFbsPackageLabelBatchV1`

Создать задание на выгрузку этикеток

`POST /v1/posting/fbs/package-label/create`

`await ozon.postings.createFbsPackageLabelBatchV1(input)`

Обязательные поля запроса: `posting_number`.

> Устарел: В будущем метод будет отключён. Мы предупредим вас об этом за месяц. Переключитесь на /v2/posting/fbs/package-label/create. Замена в SDK: `ozon.postings.createFbsPackageLabelBatchV2(...)` для `POST /v2/posting/fbs/package-label/create`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_CreateLabelBatch)

### `createFbsPackageLabelBatchV2`

Создать задание на формирование этикеток

`POST /v2/posting/fbs/package-label/create`

`await ozon.postings.createFbsPackageLabelBatchV2(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_CreateLabelBatchV2)

### `createOrGetFbsPostingProductExemplarsV6`

Получить данные созданных экземпляров

`POST /v6/fbs/posting/product/exemplar/create-or-get`

`await ozon.postings.createOrGetFbsPostingProductExemplarsV6(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_FbsPostingProductExemplarCreateOrGetV6)

### `getEtgbDeclarationsV1`

Таможенные декларации ETGB

`POST /v1/posting/global/etgb`

`await ozon.postings.getEtgbDeclarationsV1(input)`

Обязательные поля запроса: `date`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetEtgb)

### `getFboPostingCancellationStatus`

Проверить статус отмены отправления

`POST /v1/posting/cancel/status`

`await ozon.postings.getFboPostingCancellationStatus(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingCancelStatus)

### `getFboPostingMarks`

Получить маркировки экземпляров из отправления

`POST /v1/posting/marks`

`await ozon.postings.getFboPostingMarks(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingMarks)

### `getFboPostingV2`

Информация об отправлении

`POST /v2/posting/fbo/get`

`await ozon.postings.getFboPostingV2(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetFboPosting)

### `getFbpPostingV1`

Получить информацию об отправлении по идентификатору

`POST /v1/posting/fbp/get`

`await ozon.postings.getFbpPostingV1(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetFbpPosting)

### `getFbsActBarcode`

Штрихкод для отгрузки отправления

`POST /v2/posting/fbs/act/get-barcode`

`await ozon.postings.getFbsActBarcode(input)`

Обязательные поля запроса: `id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingFBSGetBarcode)

### `getFbsActBarcodeText`

Значение штрихкода для отгрузки отправления

`POST /v2/posting/fbs/act/get-barcode/text`

`await ozon.postings.getFbsActBarcodeText(input)`

Обязательные поля запроса: `id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingFBSGetBarcodeText)

### `getFbsActContainerLabels`

Этикетки для грузового места

`POST /v2/posting/fbs/act/get-container-labels`

`await ozon.postings.getFbsActContainerLabels(input)`

Обязательные поля запроса: `id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingFBSActGetContainerLabels)

### `getFbsActPdf`

Получить PDF c документами

`POST /v2/posting/fbs/act/get-pdf`

`await ozon.postings.getFbsActPdf(input)`

Обязательные поля запроса: `id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingFBSGetAct)

### `getFbsActStatus`

Статус отгрузки и документов

`POST /v2/posting/fbs/act/check-status`

`await ozon.postings.getFbsActStatus(input)`

Обязательные поля запроса: `id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingFBSActCheckStatus)

### `getFbsDigitalActPdf`

Получить лист отгрузки по перевозке

`POST /v2/posting/fbs/digital/act/get-pdf`

`await ozon.postings.getFbsDigitalActPdf(input)`

Обязательные поля запроса: `id`.

> Устарел: Метод устаревает и будет отключён 22 марта 2026 года. Переключитесь на /v2/posting/fbs/act/get-pdf. Замена в SDK: `ozon.postings.getFbsActPdf(...)` для `POST /v2/posting/fbs/act/get-pdf`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingFBSGetDigitalAct)

### `getFbsDigitalActStatus`

Статус формирования накладной

`POST /v2/posting/fbs/digital/act/check-status`

`await ozon.postings.getFbsDigitalActStatus(input)`

Обязательные поля запроса: `id`.

> Устарел: Метод устаревает и будет отключён 22 марта 2026 года. Переключитесь на /v2/posting/fbs/act/check-status. Замена в SDK: `ozon.postings.getFbsActStatus(...)` для `POST /v2/posting/fbs/act/check-status`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingFBSDigitalActCheckStatus)

### `getFbsPackageLabelBatchV1`

Получить файл с этикетками

`POST /v1/posting/fbs/package-label/get`

`await ozon.postings.getFbsPackageLabelBatchV1(input)`

Обязательные поля запроса: `task_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetLabelBatch)

### `getFbsPostingByBarcodeV2`

Получить информацию об отправлении по штрихкоду

`POST /v2/posting/fbs/get-by-barcode`

`await ozon.postings.getFbsPostingByBarcodeV2(input)`

Обязательные поля запроса: `barcode`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetFbsPostingByBarcode)

### `getFbsPostingCancelReasonsV1`

Причины отмены отправления

`POST /v1/posting/fbs/cancel-reason`

`await ozon.postings.getFbsPostingCancelReasonsV1(input)`

Обязательные поля запроса: `related_posting_numbers`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetPostingFbsCancelReasonV1)

### `getFbsPostingProductExemplarStatusV5`

Получить статус добавления экземпляров

`POST /v5/fbs/posting/product/exemplar/status`

`await ozon.postings.getFbsPostingProductExemplarStatusV5(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_FbsPostingProductExemplarStatusV5)

### `getFbsPostingRestrictionsV1`

Получить ограничения пункта приёма

`POST /v1/posting/fbs/restrictions`

`await ozon.postings.getFbsPostingRestrictionsV1(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetRestrictions)

### `getFbsPostingTimeslotChangeRestrictions`

Доступные даты для переноса доставки

`POST /v1/posting/fbs/timeslot/change-restrictions`

`await ozon.postings.getFbsPostingTimeslotChangeRestrictions(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingTimeslotChangeRestrictions)

### `getFbsPostingV3`

Получить информацию об отправлении по идентификатору

`POST /v3/posting/fbs/get`

`await ozon.postings.getFbsPostingV3(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetFbsPostingV3)

### `getFbsTraceableAttributes`

Получить список незаполненных атрибутов для прослеживаемых товаров

`POST /v1/posting/fbs/product/traceable/attribute`

`await ozon.postings.getFbsTraceableAttributes(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingFbsProductTraceableAttribute)

### `listFboPostingCancelReasons`

Причины отмены отправлений по схеме FBO

`POST /v1/posting/fbo/cancel-reason/list`

`await ozon.postings.listFboPostingCancelReasons()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetPostingFboCancelReasonList)

### `listFboPostingsV2`

Список отправлений

`POST /v2/posting/fbo/list`

`await ozon.postings.listFboPostingsV2(input)`

Обязательные поля запроса: `filter`, `limit`.

> Устарел: С 31 августа 2026 года метод будет отключён. Переключитесь на /v3/posting/fbo/list. Замена в SDK: `ozon.postings.listFboPostingsV3(...)` для `POST /v3/posting/fbo/list`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetFboPostingList)

### `listFboPostingsV3`

Получить список отправлений

`POST /v3/posting/fbo/list`

`await ozon.postings.listFboPostingsV3(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingFboList)

### `listFbpPostingsV1`

Получить список отправлений

`POST /v1/posting/fbp/list`

`await ozon.postings.listFbpPostingsV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingFbpList)

### `listFbsActPostings`

Список отправлений в акте

`POST /v2/posting/fbs/act/get-postings`

`await ozon.postings.listFbsActPostings(input)`

Обязательные поля запроса: `id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_ActPostingList)

### `listFbsActs`

Список актов по отгрузкам

`POST /v2/posting/fbs/act/list`

`await ozon.postings.listFbsActs(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_FbsActList)

### `listFbsPostingCancelReasonsV2`

Причины отмены отправлений

`POST /v2/posting/fbs/cancel-reason/list`

`await ozon.postings.listFbsPostingCancelReasonsV2()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetPostingFbsCancelReasonList)

### `listFbsPostingProductCountriesV2`

Список доступных стран-изготовителей

`POST /v2/posting/fbs/product/country/list`

`await ozon.postings.listFbsPostingProductCountriesV2(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_ListCountryProductFbsPostingV2)

### `listFbsPostingsV3`

Список отправлений

`POST /v3/posting/fbs/list`

`await ozon.postings.listFbsPostingsV3(input)`

Обязательные поля запроса: `filter`, `limit`, `offset`.

> Устарел: С 31 августа 2026 года метод будет отключён. Переключитесь на /v4/posting/fbs/list. Замена в SDK: `ozon.postings.listFbsPostingsV4(...)` для `POST /v4/posting/fbs/list`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetFbsPostingListV3)

### `listFbsPostingsV4`

Получить список отправлений

`POST /v4/posting/fbs/list`

`await ozon.postings.listFbsPostingsV4(input)`

Обязательные поля запроса: `filter`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingFbsList)

### `listUnfulfilledFbsPostingsV3`

Список необработанных отправлений

`POST /v3/posting/fbs/unfulfilled/list`

`await ozon.postings.listUnfulfilledFbsPostingsV3(input)`

Обязательные поля запроса: `filter`, `limit`, `offset`.

> Устарел: С 31 августа 2026 года метод будет отключён. Переключитесь на /v4/posting/fbs/unfulfilled/list. Замена в SDK: `ozon.postings.listUnfulfilledFbsPostingsV4(...)` для `POST /v4/posting/fbs/unfulfilled/list`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_GetFbsPostingUnfulfilledList)

### `listUnfulfilledFbsPostingsV4`

Получить список необработанных отправлений

`POST /v4/posting/fbs/unfulfilled/list`

`await ozon.postings.listUnfulfilledFbsPostingsV4(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingFbsUnfulfilledList)

### `listUnpaidLegalProductsV1`

Список неоплаченных товаров, заказанных юридическими лицами

`POST /v1/posting/unpaid-legal/product/list`

`await ozon.postings.listUnpaidLegalProductsV1(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_UnpaidLegalProductList)

### `openFbsPostingArbitrationV2`

Открыть спор по отправлению

`POST /v2/posting/fbs/arbitration`

`await ozon.postings.openFbsPostingArbitrationV2(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_MoveFbsPostingToArbitration)

### `printFbsPackageLabelsV2`

Напечатать этикетку

`POST /v2/posting/fbs/package-label`

`await ozon.postings.printFbsPackageLabelsV2(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingFBSPackageLabel)

### `setFbsPostingCutoff`

Уточнить дату отгрузки отправления

`POST /v1/posting/cutoff/set`

`await ozon.postings.setFbsPostingCutoff(input)`

Обязательные поля запроса: `new_cutoff_date`, `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_SetPostingCutoff)

### `setFbsPostingMultiboxQuantityV3`

Указать количество коробок для многокоробочных отправлений

`POST /v3/posting/multiboxqty/set`

`await ozon.postings.setFbsPostingMultiboxQuantityV3(input)`

Обязательные поля запроса: `posting_number`, `multi_box_qty`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingMultiBoxQtySetV3)

### `setFbsPostingProductCountryV2`

Добавить информацию о стране-изготовителе товара

`POST /v2/posting/fbs/product/country/set`

`await ozon.postings.setFbsPostingProductCountryV2(input)`

Обязательные поля запроса: `posting_number`, `product_id`, `country_iso_code`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_SetCountryProductFbsPostingV2)

### `setFbsPostingProductExemplarsV6`

Проверить и сохранить данные экземпляров

`POST /v6/fbs/posting/product/exemplar/set`

`await ozon.postings.setFbsPostingProductExemplarsV6(input)`

Обязательные поля запроса: `posting_number`, `products`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_FbsPostingProductExemplarSetV6)

### `setFbsPostingsAwaitingDeliveryV2`

Передать отправление к отгрузке

`POST /v2/posting/fbs/awaiting-delivery`

`await ozon.postings.setFbsPostingsAwaitingDeliveryV2(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_MoveFbsPostingToAwaitingDelivery)

### `setFbsPostingsDelivered`

Изменить статус на «Доставлено»

`POST /v2/fbs/posting/delivered`

`await ozon.postings.setFbsPostingsDelivered(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_FbsPostingDelivered)

### `setFbsPostingsDelivering`

Изменить статус на «Доставляется»

`POST /v2/fbs/posting/delivering`

`await ozon.postings.setFbsPostingsDelivering(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_FbsPostingDelivering)

### `setFbsPostingsLastMile`

Изменить статус на «Последняя миля»

`POST /v2/fbs/posting/last-mile`

`await ozon.postings.setFbsPostingsLastMile(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_FbsPostingLastMile)

### `setFbsPostingTimeslot`

Перенести дату доставки

`POST /v1/posting/fbs/timeslot/set`

`await ozon.postings.setFbsPostingTimeslot(input)`

Обязательные поля запроса: `new_timeslot`, `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_SetPostingTimeslot)

### `setFbsPostingTrackingNumbers`

Добавить трек-номера

`POST /v2/fbs/posting/tracking-number/set`

`await ozon.postings.setFbsPostingTrackingNumbers(input)`

Обязательные поля запроса: `tracking_numbers`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_FbsPostingTrackingNumberSet)

### `shipFbsPostingPackageV4`

Частичная сборка отправления (версия 4)

`POST /v4/posting/fbs/ship/package`

`await ozon.postings.shipFbsPostingPackageV4(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_ShipFbsPostingPackage)

### `shipFbsPostingV4`

Собрать заказ (версия 4)

`POST /v4/posting/fbs/ship`

`await ozon.postings.shipFbsPostingV4(input)`

Обязательные поля запроса: `packages`, `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_ShipFbsPostingV4)

### `splitFbsPosting`

Разделить заказ на отправления без сборки

`POST /v1/posting/fbs/split`

`await ozon.postings.splitFbsPosting(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/FbsSplit)

### `splitTraceableFbsPosting`

Разделить отправление с прослеживаемыми товарами

`POST /v1/posting/fbs/traceable/split`

`await ozon.postings.splitTraceableFbsPosting(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingFbsTraceableSplit)

### `updateFbsPostingProductExemplars`

Обновить данные экземпляров

`POST /v1/fbs/posting/product/exemplar/update`

`await ozon.postings.updateFbsPostingProductExemplars(input)`

Обязательные поля запроса: `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_FbsPostingProductExemplarUpdate)

### `validateFbsPostingProductExemplarsV5`

Валидация кодов маркировки

`POST /v5/fbs/posting/product/exemplar/validate`

`await ozon.postings.validateFbsPostingProductExemplarsV5(input)`

Обязательные поля запроса: `posting_number`, `products`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_FbsPostingProductExemplarValidateV5)

### `verifyFbsPickupCodeV1`

Проверить код курьера

`POST /v1/posting/fbs/pick-up-code/verify`

`await ozon.postings.verifyFbsPickupCodeV1(input)`

Обязательные поля запроса: `pickup_code`, `posting_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PostingAPI_PostingFBSPickupCodeVerify)

## `pricingStrategies`

### `addProductsToPricingStrategy`

Добавить товары в стратегию

`POST /v1/pricing-strategy/products/add`

`await ozon.pricingStrategies.addProductsToPricingStrategy(input)`

Обязательные поля запроса: `product_id`, `strategy_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_items-add)

### `createPricingStrategy`

Создать стратегию

`POST /v1/pricing-strategy/create`

`await ozon.pricingStrategies.createPricingStrategy(input)`

Обязательные поля запроса: `competitors`, `strategy_name`, `competitors[].coefficient`, `competitors[].competitor_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_create)

### `deletePricingStrategy`

Удалить стратегию

`POST /v1/pricing-strategy/delete`

`await ozon.pricingStrategies.deletePricingStrategy(input)`

Обязательные поля запроса: `strategy_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_delete)

### `deleteProductsFromPricingStrategy`

Удалить товары из стратегии

`POST /v1/pricing-strategy/products/delete`

`await ozon.pricingStrategies.deleteProductsFromPricingStrategy(input)`

Обязательные поля запроса: `product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_items-delete)

### `getPricingStrategy`

Информация о стратегии

`POST /v1/pricing-strategy/info`

`await ozon.pricingStrategies.getPricingStrategy(input)`

Обязательные поля запроса: `strategy_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_info)

### `getPricingStrategyIdsByProductIds`

Список идентификаторов стратегий

`POST /v1/pricing-strategy/strategy-ids-by-product-ids`

`await ozon.pricingStrategies.getPricingStrategyIdsByProductIds(input)`

Обязательные поля запроса: `product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_ids)

### `getPricingStrategyProductInfo`

Цена товара у конкурента

`POST /v1/pricing-strategy/product/info`

`await ozon.pricingStrategies.getPricingStrategyProductInfo(input)`

Обязательные поля запроса: `product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_items-info)

### `listPricingCompetitors`

Список конкурентов

`POST /v1/pricing-strategy/competitors/list`

`await ozon.pricingStrategies.listPricingCompetitors(input)`

Обязательные поля запроса: `page`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_competitors)

### `listPricingStrategies`

Список стратегий

`POST /v1/pricing-strategy/list`

`await ozon.pricingStrategies.listPricingStrategies(input)`

Обязательные поля запроса: `page`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_list)

### `listPricingStrategyProducts`

Список товаров в стратегии

`POST /v1/pricing-strategy/products/list`

`await ozon.pricingStrategies.listPricingStrategyProducts(input)`

Обязательные поля запроса: `strategy_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_items-list)

### `updatePricingStrategy`

Обновить стратегию

`POST /v1/pricing-strategy/update`

`await ozon.pricingStrategies.updatePricingStrategy(input)`

Обязательные поля запроса: `competitors`, `strategy_id`, `strategy_name`, `competitors[].coefficient`, `competitors[].competitor_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_update)

### `updatePricingStrategyStatus`

Изменить статус стратегии

`POST /v1/pricing-strategy/status`

`await ozon.pricingStrategies.updatePricingStrategyStatus(input)`

Обязательные поля запроса: `strategy_id`, `enabled`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/pricing_status)

## `products`

Рекомендуемые алиасы без версии:

- `createProductCertificate` → `createProductCertificateV2`
- `getProductCertificateParams` → `getProductCertificateParamsV2`
- `getProductPriceDetails` → `getProductPriceDetailsV1`
- `getProductStairwayDiscountByQuantity` → `getProductStairwayDiscountByQuantityV1`
- `getProductVisibilityInfo` → `getProductVisibilityInfoV1`
- `listCertificateAccordanceTypes` → `listCertificateAccordanceTypesV2`
- `listCertificationCategories` → `listCertificationCategoriesV2`
- `listFboProductStocksByWarehouse` → `listFboProductStocksByWarehouseV1`
- `listProductCertificateOptions` → `listProductCertificateOptionsV2`
- `setProductStairwayDiscountByQuantity` → `setProductStairwayDiscountByQuantityV1`
- `setProductVisibility` → `setProductVisibilityV1`

### `archiveProducts`

Перенести товар в архив

`POST /v1/product/archive`

`await ozon.products.archiveProducts(input)`

Обязательные поля запроса: `product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductArchive)

### `bindProductCertificate`

Привязать сертификат к товару

`POST /v1/product/certificate/bind`

`await ozon.products.bindProductCertificate(input)`

Обязательные поля запроса: `certificate_id`, `skus|product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductCertificateBind)

### `createProductCertificateV1`

Добавить сертификаты для товаров

`POST /v1/product/certificate/create`

`await ozon.products.createProductCertificateV1(input)`

Обязательные поля запроса: `files`, `name`, `number`, `type_code`, `issue_date`.

> Устарел: 31 августа 2026 года отключим метод. Переключитесь на методы /v2/product/certification/options, /v2/product/certification/params и /v2/product/certificate/create. Замены в SDK: `ozon.products.listProductCertificateOptionsV2(...)` для `POST /v2/product/certification/options`; `ozon.products.getProductCertificateParamsV2(...)` для `POST /v2/product/certification/params`; `ozon.products.createProductCertificateV2(...)` для `POST /v2/product/certificate/create`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductCertificateCreate)

### `createProductCertificateV2`

Создать сертификат качества

`POST /v2/product/certificate/create`

`await ozon.products.createProductCertificateV2(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductCertificateCreate)

### `deleteProductCertificate`

Удалить сертификат

`POST /v1/product/certificate/delete`

`await ozon.products.deleteProductCertificate(input)`

Обязательные поля запроса: `certificate_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CertificateDelete)

### `deleteProducts`

Удалить товар без SKU из архива

`POST /v2/products/delete`

`await ozon.products.deleteProducts(input)`

Обязательные поля запроса: `products`, `products[].offer_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_DeleteProducts)

### `getDiscountedProductInfo`

Узнать информацию об уценке и основном товаре по SKU уценённого товара

`POST /v1/product/info/discounted`

`await ozon.products.getDiscountedProductInfo(input)`

Обязательные поля запроса: `discounted_skus`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoDiscounted)

### `getProductAttributes`

Получить описание характеристик товара

`POST /v4/product/info/attributes`

`await ozon.products.getProductAttributes(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductAttributesV4)

### `getProductCertificateInfo`

Информация о сертификате

`POST /v1/product/certificate/info`

`await ozon.products.getProductCertificateInfo(input)`

Обязательные поля запроса: `certificate_number`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CertificateInfo)

### `getProductCertificateParamsV2`

Получить обязательные параметры для создания сертификата качества

`POST /v2/product/certification/params`

`await ozon.products.getProductCertificateParamsV2(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductCertificateParams)

### `getProductDescription`

Получить описание товара

`POST /v1/product/info/description`

`await ozon.products.getProductDescription(input)`

Обязательные поля запроса: `exactly one of offer_id, product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoDescription)

### `getProductImportStatus`

Узнать статус добавления или обновления товара

`POST /v1/product/import/info`

`await ozon.products.getProductImportStatus(input)`

Обязательные поля запроса: `task_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetImportProductsInfo)

### `getProductInfoList`

Получить информацию о товарах по идентификаторам

`POST /v3/product/info/list`

`await ozon.products.getProductInfoList(input)`

Обязательные поля запроса: `one of offer_id, product_id, sku`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoList)

### `getProductMinPriceTimerStatus`

Получить статус установленного таймера

`POST /v1/product/action/timer/status`

`await ozon.products.getProductMinPriceTimerStatus(input)`

Обязательные поля запроса: `product_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ActionTimerStatus)

### `getProductPictures`

Получить изображения товаров

`POST /v2/product/pictures/info`

`await ozon.products.getProductPictures(input)`

Обязательные поля запроса: `product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductInfoPicturesV2)

### `getProductPlacementZoneInfo`

Получить зоны размещения товаров по SKU перед поставкой

`POST /v1/product/placement-zone/info`

`await ozon.products.getProductPlacementZoneInfo(input)`

Обязательные поля запроса: `skus`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductPlacementZoneInfo)

### `getProductPriceDetailsV1`

Получить подробную информацию о ценах товаров

`POST /v1/product/prices/details`

`await ozon.products.getProductPriceDetailsV1(input)`

Обязательные поля запроса: `skus`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductPricesDetails)

### `getProductPrices`

Получить информацию о цене товара

`POST /v5/product/info/prices`

`await ozon.products.getProductPrices(input)`

Обязательные поля запроса: `filter`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoPrices)

### `getProductRatingBySku`

Получить контент-рейтинг товаров по SKU

`POST /v1/product/rating-by-sku`

`await ozon.products.getProductRatingBySku(input)`

Обязательные поля запроса: `skus`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductRatingBySku)

### `getProductStairwayDiscountByQuantityV1`

Получить информацию о скидке от количества

`POST /v1/product/stairway-discount/by-quantity/get`

`await ozon.products.getProductStairwayDiscountByQuantityV1(input)`

Обязательные поля запроса: `skus`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductStairwayDiscountByQuantity)

### `getProductStocks`

Информация о количестве товаров

`POST /v4/product/info/stocks`

`await ozon.products.getProductStocks(input)`

Обязательные поля запроса: `filter`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoStocks)

### `getProductStocksByWarehouse`

Получить информацию по остаткам на складе FBS и rFBS

`POST /v1/product/info/warehouse/stocks`

`await ozon.products.getProductStocksByWarehouse(input)`

Обязательные поля запроса: `limit`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductInfoWarehouseStocks)

### `getProductStocksByWarehouseFbs`

Информация об остатках на складах продавца (FBS и rFBS)

`POST /v1/product/info/stocks-by-warehouse/fbs`

`await ozon.products.getProductStocksByWarehouseFbs(input)`

Обязательные поля запроса: `sku|offer_id`.

> Устарел: Метод устаревает и будет отключён 7 апреля 2026 года. Переключитесь на /v2/product/info/stocks-by-warehouse/fbs. Замена в SDK: `ozon.products.getProductStocksByWarehouseFbsV2(...)` для `POST /v2/product/info/stocks-by-warehouse/fbs`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductStocksByWarehouseFbs)

### `getProductStocksByWarehouseFbsV2`

Получить информацию об остатках на складах продавца

`POST /v2/product/info/stocks-by-warehouse/fbs`

`await ozon.products.getProductStocksByWarehouseFbsV2(input)`

Обязательные поля запроса: `limit`, `sku|offer_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoStocksByWarehouseFbsV2)

### `getProductSubscriptionCounts`

Количество подписавшихся на товар пользователей

`POST /v1/product/info/subscription`

`await ozon.products.getProductSubscriptionCounts(input)`

Обязательные поля запроса: `skus`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoSubscription)

### `getProductUploadQuota`

Лимиты на ассортимент, создание и обновление товаров

`POST /v4/product/info/limit`

`await ozon.products.getProductUploadQuota()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetUploadQuota)

### `getProductVisibilityInfoV1`

Получить информацию о видимости товара

`POST /v1/product/visibility/info`

`await ozon.products.getProductVisibilityInfoV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductVisibilityInfo)

### `getQuantProductsInfo`

Информация об эконом-товаре

`POST /v1/product/quant/info`

`await ozon.products.getQuantProductsInfo(input)`

Обязательные поля запроса: `quant_code`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/QuantGetInfo)

### `getRelatedProductSkus`

Получить связанные SKU

`POST /v1/product/related-sku/get`

`await ozon.products.getRelatedProductSkus(input)`

Обязательные поля запроса: `sku`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductGetRelatedSKU)

### `importProductPictures`

Загрузить или обновить изображения товара

`POST /v1/product/pictures/import`

`await ozon.products.importProductPictures(input)`

Обязательные поля запроса: `product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductImportPictures)

### `importProducts`

Создать или обновить товар

`POST /v3/product/import`

`await ozon.products.importProducts(input)`

Обязательные поля запроса: `items`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ImportProductsV3)

### `importProductsBySku`

Создать товар по SKU

`POST /v1/product/import-by-sku`

`await ozon.products.importProductsBySku(input)`

Обязательные поля запроса: `items`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ImportProductsBySKU)

### `listCertificateAccordanceTypesV1`

Список типов соответствия требованиям (версия 1)

`GET /v1/product/certificate/accordance-types`

`await ozon.products.listCertificateAccordanceTypesV1()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductCertificateAccordanceTypes)

### `listCertificateAccordanceTypesV2`

Список типов соответствия требованиям (версия 2)

`GET /v2/product/certificate/accordance-types/list`

`await ozon.products.listCertificateAccordanceTypesV2()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CertificateAccordanceTypes)

### `listCertificateProducts`

Список товаров, привязанных к сертификату

`POST /v1/product/certificate/products/list`

`await ozon.products.listCertificateProducts(input)`

Обязательные поля запроса: `certificate_id`, `limit|page+page_size`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CertificateProductsList)

### `listCertificateProductStatuses`

Список возможных статусов товаров

`POST /v1/product/certificate/product_status/list`

`await ozon.products.listCertificateProductStatuses()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductStatusList)

### `listCertificateRejectionReasons`

Возможные причины отклонения сертификата

`POST /v1/product/certificate/rejection_reasons/list`

`await ozon.products.listCertificateRejectionReasons()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/RejectionReasonsList)

### `listCertificateStatuses`

Возможные статусы сертификатов

`POST /v1/product/certificate/status/list`

`await ozon.products.listCertificateStatuses()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CertificateStatusList)

### `listCertificateTypes`

Справочник типов документов

`GET /v1/product/certificate/types`

`await ozon.products.listCertificateTypes()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductCertificateTypes)

### `listCertificationCategoriesV1`

Список сертифицируемых категорий

`POST /v1/product/certification/list`

`await ozon.products.listCertificationCategoriesV1(input)`

> Устарел: 14 апреля 2025 года метод будет отключён. Переключитесь на /v2/product/certification/list. Замена в SDK: `ozon.products.listCertificationCategoriesV2(...)` для `POST /v2/product/certification/list`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_V1ProductCertificationList)

### `listCertificationCategoriesV2`

Список сертифицируемых категорий

`POST /v2/product/certification/list`

`await ozon.products.listCertificationCategoriesV2(input)`

Обязательные поля запроса: `page`, `page_size`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductCertificationList)

### `listFboProductStocksByWarehouseV1`

Получить информацию о стоках на складах FBO

`POST /v1/product/info/stocks-by-warehouse/fbo`

`await ozon.products.listFboProductStocksByWarehouseV1(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetProductInfoStocksByWarehouseFbo)

### `listProductCertificateOptionsV2`

Получить параметры для создания сертификата качества

`POST /v2/product/certification/options`

`await ozon.products.listProductCertificateOptionsV2()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductCertificateOptions)

### `listProductCertificates`

Список сертификатов

`POST /v1/product/certificate/list`

`await ozon.products.listProductCertificates(input)`

Обязательные поля запроса: `page`, `page_size`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CertificateList)

### `listProducts`

Список товаров

`POST /v3/product/list`

`await ozon.products.listProducts(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductList)

### `listProductsWithWrongVolume`

Список товаров с некорректными ОВХ

`POST /v1/product/info/wrong-volume`

`await ozon.products.listProductsWithWrongVolume(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductInfoWrongVolume)

### `listQuantProducts`

Список эконом-товаров

`POST /v1/product/quant/list`

`await ozon.products.listQuantProducts(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/QuantProductList)

### `setProductStairwayDiscountByQuantityV1`

Управлять скидкой от количества

`POST /v1/product/stairway-discount/by-quantity/set`

`await ozon.products.setProductStairwayDiscountByQuantityV1(input)`

Обязательные поля запроса: `stairways`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_SetProductStairwayDiscountByQuantity)

### `setProductVisibilityV1`

Настроить видимость товара на витрине Ozon и Ozon Селект

`POST /v1/product/visibility/set`

`await ozon.products.setProductVisibilityV1(input)`

Обязательные поля запроса: `item_placement`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductVisibilitySet)

### `unarchiveProducts`

Вернуть товар из архива

`POST /v1/product/unarchive`

`await ozon.products.unarchiveProducts(input)`

Обязательные поля запроса: `product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductUnarchive)

### `unbindProductCertificate`

Отвязать товар от сертификата

`POST /v1/product/certificate/unbind`

`await ozon.products.unbindProductCertificate(input)`

Обязательные поля запроса: `certificate_id`, `skus|product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CertificateUnbind)

### `updateProductAttributes`

Обновить характеристики товара

`POST /v1/product/attributes/update`

`await ozon.products.updateProductAttributes(input)`

Обязательные поля запроса: `items`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductUpdateAttributes)

### `updateProductDiscount`

Установить скидку на уценённый товар

`POST /v1/product/update/discount`

`await ozon.products.updateProductDiscount(input)`

Обязательные поля запроса: `discount`, `product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductUpdateDiscount)

### `updateProductMinPriceTimer`

Обновление таймера актуальности минимальной цены

`POST /v1/product/action/timer/update`

`await ozon.products.updateProductMinPriceTimer(input)`

Обязательные поля запроса: `product_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ActionTimerUpdate)

### `updateProductOfferIds`

Изменить артикулы товаров из системы продавца

`POST /v1/product/update/offer-id`

`await ozon.products.updateProductOfferIds(input)`

Обязательные поля запроса: `update_offer_id`, `update_offer_id[].new_offer_id`, `update_offer_id[].offer_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductUpdateOfferID)

### `updateProductPrices`

Обновить цену

`POST /v1/product/import/prices`

`await ozon.products.updateProductPrices(input)`

Обязательные поля запроса: `prices`, `prices[].offer_id|product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ImportProductsPrices)

### `updateProductStocks`

Обновить количество товаров на складах

`POST /v2/products/stocks`

`await ozon.products.updateProductStocks(input)`

Обязательные поля запроса: `stocks`, `stocks[].stock`, `stocks[].warehouse_id`, `stocks[].offer_id|product_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ProductAPI_ProductsStocksV2)

## `promotions`

### `activatePromotionProducts`

Добавить товар в акцию

`POST /v1/actions/products/activate`

`await ozon.promotions.activatePromotionProducts(input)`

Обязательные поля запроса: `action_id`, `products`, `products[].product_id`, `products[].action_price`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PromosProductsActivate)

### `approveDiscountTasks`

Согласовать заявку на скидку

`POST /v1/actions/discounts-task/approve`

`await ozon.promotions.approveDiscountTasks(input)`

Обязательные поля запроса: `tasks`, `tasks[].id`, `tasks[].approved_price`, `tasks[].approved_quantity_min`, `tasks[].approved_quantity_max`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/promos_task_approve)

### `deactivatePromotionProducts`

Удалить товары из акции

`POST /v1/actions/products/deactivate`

`await ozon.promotions.deactivatePromotionProducts(input)`

Обязательные поля запроса: `action_id`, `product_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PromosProductsDeactivate)

### `declineDiscountTasks`

Отклонить заявку на скидку

`POST /v1/actions/discounts-task/decline`

`await ozon.promotions.declineDiscountTasks(input)`

Обязательные поля запроса: `tasks`, `tasks[].id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/promos_task_decline)

### `listDiscountTasks`

Список заявок на скидку

`POST /v1/actions/discounts-task/list`

`await ozon.promotions.listDiscountTasks(input)`

Обязательные поля запроса: `status`, `page`, `limit`.

> Устарел: Метод устаревает и будет отключён в будущем. Переключитесь на /v2/actions/discounts-task/list. Замена в SDK: `ozon.promotions.listDiscountTasksV2(...)` для `POST /v2/actions/discounts-task/list`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/promos_task_list)

### `listDiscountTasksV2`

Получить список заявок на скидку

`POST /v2/actions/discounts-task/list`

`await ozon.promotions.listDiscountTasksV2(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetDiscountTaskListV2)

### `listPromotionCandidates`

Список доступных для акции товаров

`POST /v1/actions/candidates`

`await ozon.promotions.listPromotionCandidates(input)`

Обязательные поля запроса: `action_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PromosCandidates)

### `listPromotionProducts`

Список участвующих в акции товаров

`POST /v1/actions/products`

`await ozon.promotions.listPromotionProducts(input)`

Обязательные поля запроса: `action_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/PromosProducts)

### `listPromotions`

Список акций

`GET /v1/actions`

`await ozon.promotions.listPromotions()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/Promos)

## `questions`

Рекомендуемые алиасы без версии:

- `createQuestionAnswer` → `createQuestionAnswerV1`
- `deleteQuestionAnswer` → `deleteQuestionAnswerV1`
- `getQuestionCount` → `getQuestionCountV1`
- `getQuestionInfo` → `getQuestionInfoV1`
- `getQuestionTopSkus` → `getQuestionTopSkusV1`
- `listQuestionAnswers` → `listQuestionAnswersV1`
- `listQuestions` → `listQuestionsV1`
- `updateQuestionStatus` → `updateQuestionStatusV1`

### `createQuestionAnswerV1`

Создать ответ на вопрос

`POST /v1/question/answer/create`

`await ozon.questions.createQuestionAnswerV1(input)`

Обязательные поля запроса: `question_id`, `sku`, `text`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/QuestionAnswer_Create)

### `deleteQuestionAnswerV1`

Удалить ответ на вопрос

`POST /v1/question/answer/delete`

`await ozon.questions.deleteQuestionAnswerV1(input)`

Обязательные поля запроса: `answer_id`, `sku`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/QuestionAnswer_Delete)

### `getQuestionCountV1`

Количество вопросов по статусам

`POST /v1/question/count`

`await ozon.questions.getQuestionCountV1()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/Question_Count)

### `getQuestionInfoV1`

Информация о вопросе

`POST /v1/question/info`

`await ozon.questions.getQuestionInfoV1(input)`

Обязательные поля запроса: `question_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/Question_Info)

### `getQuestionTopSkusV1`

Товары с наибольшим количеством вопросов

`POST /v1/question/top-sku`

`await ozon.questions.getQuestionTopSkusV1(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/Question_TopSku)

### `listQuestionAnswersV1`

Список ответов на вопрос

`POST /v1/question/answer/list`

`await ozon.questions.listQuestionAnswersV1(input)`

Обязательные поля запроса: `question_id`, `sku`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/QuestionAnswer_List)

### `listQuestionsV1`

Список вопросов

`POST /v1/question/list`

`await ozon.questions.listQuestionsV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/Question_List)

### `updateQuestionStatusV1`

Изменить статус вопросов

`POST /v1/question/change-status`

`await ozon.questions.updateQuestionStatusV1(input)`

Обязательные поля запроса: `question_ids`, `status`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/Question_ChangeStatus)

## `ratings`

### `getFbsRatingIndexInfo`

Получить индекс ошибок FBS и rFBS

`POST /v1/rating/index/fbs/info`

`await ozon.ratings.getFbsRatingIndexInfo()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/RatingAPI_GetFBSRatingIndexInfoV1)

### `getRatingHistory`

Получить информацию о рейтингах продавца за период

`POST /v1/rating/history`

`await ozon.ratings.getRatingHistory(input)`

Обязательные поля запроса: `date_from`, `date_to`, `ratings`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/RatingAPI_RatingHistoryV1)

### `getRatingSummary`

Получить информацию о текущих рейтингах продавца

`POST /v1/rating/summary`

`await ozon.ratings.getRatingSummary(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/RatingAPI_RatingSummaryV1)

### `listFbsRatingIndexPostings`

Список отправлений, которые повлияли на индекс ошибок FBS и rFBS

`POST /v1/rating/index/fbs/posting/list`

`await ozon.ratings.listFbsRatingIndexPostings(input)`

Обязательные поля запроса: `filter`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/RatingAPI_ListFBSRatingIndexPostingsV1)

## `receipts`

Рекомендуемые алиасы без версии:

- `getReceipt` → `getReceiptV1`
- `listSellerReceipts` → `listSellerReceiptsV1`
- `uploadReceipt` → `uploadReceiptV1`

### `getReceiptV1`

Получить чек в формате PDF

`POST /v1/receipts/get`

`await ozon.receipts.getReceiptV1(input)`

Обязательные поля запроса: `receipt_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetReceipt)

### `listSellerReceiptsV1`

Получить список чеков продавца

`POST /v1/receipts/seller/list`

`await ozon.receipts.listSellerReceiptsV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReceiptsSellerList)

### `uploadReceiptV1`

Загрузить чек

`POST /v1/receipts/upload`

`await ozon.receipts.uploadReceiptV1(input)`

Обязательные поля запроса: `content`, `operation_type`, `posting_numbers`, `receipt_number`, `type`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/UploadReceipt)

## `removals`

Рекомендуемые алиасы без версии:

- `listStockReturns` → `listStockReturnsV1`
- `listSupplyReturns` → `listSupplyReturnsV1`

### `listStockReturnsV1`

Отчёт по вывозу и утилизации со стока FBO

`POST /v1/removal/from-stock/list`

`await ozon.removals.listStockReturnsV1(input)`

Обязательные поля запроса: `date_from`, `date_to`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetSupplierReturnsSummaryReport)

### `listSupplyReturnsV1`

Отчёт по вывозу и утилизации с поставки FBO

`POST /v1/removal/from-supply/list`

`await ozon.removals.listSupplyReturnsV1(input)`

Обязательные поля запроса: `date_from`, `date_to`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetSupplyReturnsSummaryReport)

## `reports`

Рекомендуемые алиасы без версии:

- `createDiscountedReport` → `createDiscountedReportV1`
- `createMarkedProductsSalesReport` → `createMarkedProductsSalesReportV1`
- `createPlacementByProductsReport` → `createPlacementByProductsReportV1`
- `createPlacementBySuppliesReport` → `createPlacementBySuppliesReportV1`
- `createPostingsReport` → `createPostingsReportV1`
- `createProductsReport` → `createProductsReportV1`
- `createRealizationPostingReport` → `createRealizationPostingReportV1`
- `createReturnsReport` → `createReturnsReportV2`
- `createWarehouseStockReport` → `createWarehouseStockReportV1`
- `getReportInfo` → `getReportInfoV1`
- `listReports` → `listReportsV1`

### `createDiscountedReportV1`

Отчёт об уценённых товарах

`POST /v1/report/discounted/create`

`await ozon.reports.createDiscountedReportV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_CreateDiscountedReport)

### `createMarkedProductsSalesReportV1`

Сгенерировать отчёт по продажам товаров с маркировкой

`POST /v1/report/marked-products-sales/create`

`await ozon.reports.createMarkedProductsSalesReportV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CreateCompanyMarkedProductsSalesReport)

### `createPlacementByProductsReportV1`

Получить отчёт о стоимости размещения по товарам

`POST /v1/report/placement/by-products/create`

`await ozon.reports.createPlacementByProductsReportV1(input)`

Обязательные поля запроса: `date_from`, `date_to`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CreatePlacementByProductsReport)

### `createPlacementBySuppliesReportV1`

Получить отчёт о стоимости размещения по поставкам

`POST /v1/report/placement/by-supplies/create`

`await ozon.reports.createPlacementBySuppliesReportV1(input)`

Обязательные поля запроса: `date_from`, `date_to`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CreatePlacementBySuppliesReport)

### `createPostingsReportV1`

Отчёт об отправлениях

`POST /v1/report/postings/create`

`await ozon.reports.createPostingsReportV1(input)`

Обязательные поля запроса: `filter`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_CreateCompanyPostingsReport)

### `createProductsReportV1`

Отчёт по товарам

`POST /v1/report/products/create`

`await ozon.reports.createProductsReportV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_CreateCompanyProductsReport)

### `createRealizationPostingReportV1`

Получить позаказный отчёт о реализации товаров

`POST /v1/report/realization/posting/create`

`await ozon.reports.createRealizationPostingReportV1(input)`

Обязательные поля запроса: `month`, `year`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CreateCompanyFinanceRealizationPostingReport)

### `createReturnsReportV2`

Отчёт о возвратах

`POST /v2/report/returns/create`

`await ozon.reports.createReturnsReportV2(input)`

Обязательные поля запроса: `filter`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_ReportReturnsCreate)

### `createWarehouseStockReportV1`

Отчёт об остатках на FBS-складе

`POST /v1/report/warehouse/stock`

`await ozon.reports.createWarehouseStockReportV1(input)`

Обязательные поля запроса: `warehouseId`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_CreateStockByWarehouseReport)

### `getReportInfoV1`

Информация об отчёте

`POST /v1/report/info`

`await ozon.reports.getReportInfoV1(input)`

Обязательные поля запроса: `code`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_ReportInfo)

### `listReportsV1`

Список отчётов

`POST /v1/report/list`

`await ozon.reports.listReportsV1(input)`

Обязательные поля запроса: `page`, `page_size`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReportAPI_ReportList)

## `returns`

Рекомендуемые алиасы без версии:

- `getFbsReturnCompanyInfo` → `getFbsReturnCompanyInfoV1`
- `getGiveoutBarcode` → `getGiveoutBarcodeV1`
- `getGiveoutBarcodePdf` → `getGiveoutBarcodePdfV1`
- `getGiveoutBarcodePng` → `getGiveoutBarcodePngV1`
- `getGiveoutInfo` → `getGiveoutInfoV1`
- `getRfbsReturn` → `getRfbsReturnV2`
- `getUtilizationHistory` → `getUtilizationHistoryV1`
- `getUtilizationSettings` → `getUtilizationSettingsV1`
- `isGiveoutEnabled` → `isGiveoutEnabledV1`
- `listGiveouts` → `listGiveoutsV1`
- `listReturns` → `listReturnsV1`
- `listRfbsReturns` → `listRfbsReturnsV2`
- `resetGiveoutBarcode` → `resetGiveoutBarcodeV1`
- `setRfbsReturnAction` → `setRfbsReturnActionV1`
- `updateUtilizationSettings` → `updateUtilizationSettingsV1`

### `getFbsReturnCompanyInfoV1`

Количество возвратов FBS

`POST /v1/returns/company/fbs/info`

`await ozon.returns.getFbsReturnCompanyInfoV1(input)`

Обязательные поля запроса: `pagination`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/returnsCompanyFBSInfo)

### `getGiveoutBarcodePdfV1`

Штрихкод для получения возвратной отгрузки в формате PDF

`POST /v1/return/giveout/get-pdf`

`await ozon.returns.getGiveoutBarcodePdfV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReturnAPI_GiveoutGetPDF)

### `getGiveoutBarcodePngV1`

Штрихкод для получения возвратной отгрузки в формате PNG

`POST /v1/return/giveout/get-png`

`await ozon.returns.getGiveoutBarcodePngV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReturnAPI_GiveoutGetPNG)

### `getGiveoutBarcodeV1`

Значение штрихкода для возвратных отгрузок

`POST /v1/return/giveout/barcode`

`await ozon.returns.getGiveoutBarcodeV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReturnAPI_GiveoutGetBarcode)

### `getGiveoutInfoV1`

Информация о возвратной отгрузке

`POST /v1/return/giveout/info`

`await ozon.returns.getGiveoutInfoV1(input)`

Обязательные поля запроса: `giveout_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReturnAPI_GiveoutInfo)

### `getRfbsReturnV2`

Информация о заявке на возврат

`POST /v2/returns/rfbs/get`

`await ozon.returns.getRfbsReturnV2(input)`

Обязательные поля запроса: `return_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/RFBSReturnsAPI_ReturnsRfbsGetV2)

### `getUtilizationHistoryV1`

Получить историю изменений автоутилизации

`POST /v1/returns/settings/utilization/history`

`await ozon.returns.getUtilizationHistoryV1()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/UtilizationHistory)

### `getUtilizationSettingsV1`

Получить настройки автоутилизации

`POST /v1/returns/settings/utilization/info`

`await ozon.returns.getUtilizationSettingsV1()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/UtilizationInfo)

### `isGiveoutEnabledV1`

Проверить возможность получения возвратных отгрузок по штрихкоду

`POST /v1/return/giveout/is-enabled`

`await ozon.returns.isGiveoutEnabledV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReturnAPI_GiveoutIsEnabled)

### `listGiveoutsV1`

Список возвратных отгрузок

`POST /v1/return/giveout/list`

`await ozon.returns.listGiveoutsV1(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReturnAPI_GiveoutList)

### `listReturnsV1`

Информация о возвратах FBO и FBS

`POST /v1/returns/list`

`await ozon.returns.listReturnsV1(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/returnsList)

### `listRfbsReturnsV2`

Список заявок на возврат

`POST /v2/returns/rfbs/list`

`await ozon.returns.listRfbsReturnsV2(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/RFBSReturnsAPI_ReturnsRfbsListV2)

### `resetGiveoutBarcodeV1`

Сгенерировать новый штрихкод

`POST /v1/return/giveout/barcode-reset`

`await ozon.returns.resetGiveoutBarcodeV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReturnAPI_GiveoutBarcodeReset)

### `setRfbsReturnActionV1`

Передать доступные действия для rFBS возвратов

`POST /v1/returns/rfbs/action/set`

`await ozon.returns.setRfbsReturnActionV1(input)`

Обязательные поля запроса: `return_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReturnsAPI_ReturnsRfbsActionSet)

### `updateUtilizationSettingsV1`

Обновить настройки автоутилизации

`POST /v1/returns/settings/utilization/update`

`await ozon.returns.updateUtilizationSettingsV1(input)`

Обязательные поля запроса: `utilization_price`, `utilization_price_defects`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/UtilizationUpdate)

## `reviews`

Рекомендуемые алиасы без версии:

- `createReviewComment` → `createReviewCommentV1`
- `deleteReviewComment` → `deleteReviewCommentV2`
- `getReviewCount` → `getReviewCountV2`
- `getReviewInfo` → `getReviewInfoV2`
- `listReviewComments` → `listReviewCommentsV1`
- `listReviews` → `listReviewsV2`
- `updateReviewStatus` → `updateReviewStatusV2`

### `createReviewCommentV1`

Оставить комментарий на отзыв

`POST /v1/review/comment/create`

`await ozon.reviews.createReviewCommentV1(input)`

Обязательные поля запроса: `review_id`, `text`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewAPI_CommentCreate)

### `deleteReviewCommentV1`

Удалить комментарий на отзыв

`POST /v1/review/comment/delete`

`await ozon.reviews.deleteReviewCommentV1(input)`

Обязательные поля запроса: `comment_id`.

> Устарел: Метод устаревает. Переключитесь на /v2/review/comment/delete. Замена в SDK: `ozon.reviews.deleteReviewCommentV2(...)` для `POST /v2/review/comment/delete`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewAPI_CommentDelete)

### `deleteReviewCommentV2`

Удалить комментарий на отзыв

`POST /v2/review/comment/delete`

`await ozon.reviews.deleteReviewCommentV2(input)`

Обязательные поля запроса: `comment_id`, `sku`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewCommentDeleteV2)

### `getReviewCountV1`

Количество отзывов по статусам

`POST /v1/review/count`

`await ozon.reviews.getReviewCountV1(input)`

> Устарел: Метод устаревает. Переключитесь на /v2/review/count. Замена в SDK: `ozon.reviews.getReviewCountV2(...)` для `POST /v2/review/count`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewAPI_ReviewCount)

### `getReviewCountV2`

Получить количество отзывов по статусам

`POST /v2/review/count`

`await ozon.reviews.getReviewCountV2()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewCountV2)

### `getReviewInfoV1`

Получить информацию об отзыве

`POST /v1/review/info`

`await ozon.reviews.getReviewInfoV1(input)`

Обязательные поля запроса: `review_id`.

> Устарел: Метод устаревает. Переключитесь на /v2/review/info. Замена в SDK: `ozon.reviews.getReviewInfoV2(...)` для `POST /v2/review/info`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewAPI_ReviewInfo)

### `getReviewInfoV2`

Получить информацию по отзыву

`POST /v2/review/info`

`await ozon.reviews.getReviewInfoV2(input)`

Обязательные поля запроса: `review_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewInfoV2)

### `listReviewCommentsV1`

Получить список комментариев на отзыв

`POST /v1/review/comment/list`

`await ozon.reviews.listReviewCommentsV1(input)`

Обязательные поля запроса: `limit`, `review_id|filter.sku`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewAPI_CommentList)

### `listReviewsV1`

Получить список отзывов

`POST /v1/review/list`

`await ozon.reviews.listReviewsV1(input)`

Обязательные поля запроса: `limit`.

> Устарел: Метод устаревает. Переключитесь на /v2/review/list. Замена в SDK: `ozon.reviews.listReviewsV2(...)` для `POST /v2/review/list`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewAPI_ReviewList)

### `listReviewsV2`

Получить список отзывов

`POST /v2/review/list`

`await ozon.reviews.listReviewsV2(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewListV2)

### `updateReviewStatusV1`

Изменить статус отзывов

`POST /v1/review/change-status`

`await ozon.reviews.updateReviewStatusV1(input)`

Обязательные поля запроса: `review_ids`, `status`.

> Устарел: Метод устаревает. Переключитесь на /v2/review/change-status. Замена в SDK: `ozon.reviews.updateReviewStatusV2(...)` для `POST /v2/review/change-status`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewAPI_ReviewChangeStatus)

### `updateReviewStatusV2`

Изменить статус отзывов

`POST /v2/review/change-status`

`await ozon.reviews.updateReviewStatusV2(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ReviewChangeStatusV2)

## `searchQueries`

Рекомендуемые алиасы без версии:

- `listSearchQueriesByText` → `listSearchQueriesByTextV1`
- `listTopSearchQueries` → `listTopSearchQueriesV1`

### `listSearchQueriesByTextV1`

Получить список поисковых запросов по тексту

`POST /v1/search-queries/text`

`await ozon.searchQueries.listSearchQueriesByTextV1(input)`

Обязательные поля запроса: `limit`, `offset`, `text`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SearchQueriesAPI_SearchQueriesText)

### `listTopSearchQueriesV1`

Получить список популярных поисковых запросов

`POST /v1/search-queries/top`

`await ozon.searchQueries.listTopSearchQueriesV1(input)`

Обязательные поля запроса: `limit`, `offset`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SearchQueriesAPI_SearchQueriesTop)

## `seller`

### `getOzonLogisticsInfo`

Информация о подключении Ozon Доставки

`POST /v1/seller/ozon-logistics/info`

`await ozon.seller.getOzonLogisticsInfo()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerAPI_SellerOzonLogisticsInfo)

### `getSellerInfo`

Информация о кабинете продавца

`POST /v1/seller/info`

`await ozon.seller.getSellerInfo()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerAPI_SellerInfo)

## `sellerActions`

Рекомендуемые алиасы без версии:

- `addSellerActionProducts` → `addSellerActionProductsV1`
- `archiveSellerAction` → `archiveSellerActionV1`
- `changeSellerActionActivity` → `changeSellerActionActivityV1`
- `createSellerDiscountAction` → `createSellerDiscountActionV1`
- `createSellerDiscountWithConditionAction` → `createSellerDiscountWithConditionActionV1`
- `createSellerInstallmentAction` → `createSellerInstallmentActionV1`
- `createSellerMultiLevelDiscountAction` → `createSellerMultiLevelDiscountActionV1`
- `createSellerVoucherAction` → `createSellerVoucherActionV1`
- `deleteSellerActionProducts` → `deleteSellerActionProductsV1`
- `getSellerActionVoucherFile` → `getSellerActionVoucherFileV1`
- `listSellerActionProductCandidates` → `listSellerActionProductCandidatesV1`
- `listSellerActionProducts` → `listSellerActionProductsV1`
- `listSellerActions` → `listSellerActionsV1`
- `updateSellerDiscountAction` → `updateSellerDiscountActionV1`
- `updateSellerDiscountWithConditionAction` → `updateSellerDiscountWithConditionActionV1`
- `updateSellerInstallmentAction` → `updateSellerInstallmentActionV1`
- `updateSellerMultiLevelDiscountAction` → `updateSellerMultiLevelDiscountActionV1`
- `updateSellerVoucherAction` → `updateSellerVoucherActionV1`

### `addSellerActionProductsV1`

Добавить товары в акцию

`POST /v1/seller-actions/products/add`

`await ozon.sellerActions.addSellerActionProductsV1(input)`

Обязательные поля запроса: `action_id`, `products`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsProductsAdd)

### `archiveSellerActionV1`

Перенести акцию в архив

`POST /v1/seller-actions/archive`

`await ozon.sellerActions.archiveSellerActionV1(input)`

Обязательные поля запроса: `action_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsArchive)

### `changeSellerActionActivityV1`

Включить или выключить акцию

`POST /v1/seller-actions/change-activity`

`await ozon.sellerActions.changeSellerActionActivityV1(input)`

Обязательные поля запроса: `action_id`, `is_turn_on`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsChangeActivity)

### `createSellerDiscountActionV1`

Создать акцию с механикой «Скидка»

`POST /v1/seller-actions/create/discount`

`await ozon.sellerActions.createSellerDiscountActionV1(input)`

Обязательные поля запроса: `date_end`, `date_start`, `min_action_percent`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsCreateDiscount)

### `createSellerDiscountWithConditionActionV1`

Создать акцию с механикой «Скидка от суммы заказа»

`POST /v1/seller-actions/create/discount-with-condition`

`await ozon.sellerActions.createSellerDiscountWithConditionActionV1(input)`

Обязательные поля запроса: `date_end`, `date_start`, `discount_type`, `discount_value`, `min_order_amount`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsCreateDiscountWithCondition)

### `createSellerInstallmentActionV1`

Создать акцию с механикой «Беспроцентная рассрочка»

`POST /v1/seller-actions/create/installment`

`await ozon.sellerActions.createSellerInstallmentActionV1(input)`

Обязательные поля запроса: `date_start`, `title`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsCreateInstallment)

### `createSellerMultiLevelDiscountActionV1`

Создать акцию с механикой «Многоуровневая скидка от суммы»

`POST /v1/seller-actions/create/multi-level-discount`

`await ozon.sellerActions.createSellerMultiLevelDiscountActionV1(input)`

Обязательные поля запроса: `date_end`, `date_start`, `discount_levels`, `discount_type`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsCreateMultiLevelDiscount)

### `createSellerVoucherActionV1`

Создать акцию с механикой «Скидка по промокоду»

`POST /v1/seller-actions/create/voucher`

`await ozon.sellerActions.createSellerVoucherActionV1(input)`

Обязательные поля запроса: `budget`, `date_end`, `date_start`, `discount_type`, `discount_value`, `title`, `voucher_parameters`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsCreateVoucher)

### `deleteSellerActionProductsV1`

Удалить товары из акции

`POST /v1/seller-actions/products/delete`

`await ozon.sellerActions.deleteSellerActionProductsV1(input)`

Обязательные поля запроса: `action_id`, `skus`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsProductsDelete)

### `getSellerActionVoucherFileV1`

Получить файл с промокодами в формате CSV

`POST /v1/seller-actions/voucher/get`

`await ozon.sellerActions.getSellerActionVoucherFileV1(input)`

Обязательные поля запроса: `action_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsVoucherGet)

### `listSellerActionProductCandidatesV1`

Получить список доступных для акции товаров

`POST /v1/seller-actions/products/candidates`

`await ozon.sellerActions.listSellerActionProductCandidatesV1(input)`

Обязательные поля запроса: `action_id`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsProductsCandidates)

### `listSellerActionProductsV1`

Получить список участвующих в акции товаров

`POST /v1/seller-actions/products/list`

`await ozon.sellerActions.listSellerActionProductsV1(input)`

Обязательные поля запроса: `action_id`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsProductsList)

### `listSellerActionsV1`

Получить список акций

`POST /v1/seller-actions/list`

`await ozon.sellerActions.listSellerActionsV1(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsList)

### `updateSellerDiscountActionV1`

Обновить акцию с механикой «Скидка»

`POST /v1/seller-actions/update/discount`

`await ozon.sellerActions.updateSellerDiscountActionV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsUpdateDiscount)

### `updateSellerDiscountWithConditionActionV1`

Обновить акцию с механикой «Скидка от суммы заказа»

`POST /v1/seller-actions/update/discount-with-condition`

`await ozon.sellerActions.updateSellerDiscountWithConditionActionV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsUpdateDiscountWithCondition)

### `updateSellerInstallmentActionV1`

Обновить акцию с механикой «Беспроцентная рассрочка»

`POST /v1/seller-actions/update/installment`

`await ozon.sellerActions.updateSellerInstallmentActionV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsUpdateInstallment)

### `updateSellerMultiLevelDiscountActionV1`

Обновить акцию с механикой «Многоуровневая скидка от суммы»

`POST /v1/seller-actions/update/multi-level-discount`

`await ozon.sellerActions.updateSellerMultiLevelDiscountActionV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsUpdateMultiLevelDiscount)

### `updateSellerVoucherActionV1`

Обновить акцию с механикой «Скидка по промокоду»

`POST /v1/seller-actions/update/voucher`

`await ozon.sellerActions.updateSellerVoucherActionV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SellerActionsUpdateVoucher)

## `suppliers`

### `listSupplierAvailableWarehouses`

Загруженность складов Ozon

`GET /v1/supplier/available_warehouses`

`await ozon.suppliers.listSupplierAvailableWarehouses()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplierAPI_SupplierAvailableWarehouses)

## `supplyDrafts`

Рекомендуемые алиасы без версии:

- `listSupplyClusters` → `listSupplyClustersV2`

### `createCrossdockSupplyDraft`

Создать черновик заявки на поставку кросс-докингом

`POST /v1/draft/crossdock/create`

`await ozon.supplyDrafts.createCrossdockSupplyDraft(input)`

Обязательные поля запроса: `cluster_info`, `deletion_sku_mode`, `delivery_info`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DraftCrossdockCreate)

### `createDirectSupplyDraft`

Создать черновик заявки на прямую поставку

`POST /v1/draft/direct/create`

`await ozon.supplyDrafts.createDirectSupplyDraft(input)`

Обязательные поля запроса: `cluster_info`, `deletion_sku_mode`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DraftDirectCreate)

### `createMultiClusterSupplyDraft`

Создать черновик заявки на поставку для нескольких кластеров

`POST /v1/draft/multi-cluster/create`

`await ozon.supplyDrafts.createMultiClusterSupplyDraft(input)`

Обязательные поля запроса: `clusters_info`, `deletion_sku_mode`, `delivery_info`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DraftMultiClusterCreate)

### `createSupplyCargoes`

Установка грузомест

`POST /v1/cargoes/create`

`await ozon.supplyDrafts.createSupplyCargoes(input)`

Обязательные поля запроса: `cargoes`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesAPI_CargoesCreate)

### `createSupplyCargoLabels`

Сгенерировать этикетки для грузомест

`POST /v1/cargoes-label/create`

`await ozon.supplyDrafts.createSupplyCargoLabels(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesAPI_CargoesLabelCreate)

### `createSupplyOrderFromDraft`

Создать заявку на поставку по черновику

`POST /v2/draft/supply/create`

`await ozon.supplyDrafts.createSupplyOrderFromDraft(input)`

Обязательные поля запроса: `draft_id`, `selected_cluster_warehouses`, `supply_type`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DraftSupplyCreate)

### `deleteSupplyCargoes`

Удалить грузоместо в заявке на поставку

`POST /v1/cargoes/delete`

`await ozon.supplyDrafts.deleteSupplyCargoes(input)`

Обязательные поля запроса: `cargo_ids`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesAPI_CargoesDelete)

### `getSupplyCargoes`

Получить информацию о грузоместах

`POST /v1/cargoes/get`

`await ozon.supplyDrafts.getSupplyCargoes(input)`

Обязательные поля запроса: `supply_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesGet)

### `getSupplyCargoesCreateInfo`

Получить информацию по установке грузомест

`POST /v2/cargoes/create/info`

`await ozon.supplyDrafts.getSupplyCargoesCreateInfo(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesCreateInfoV2)

### `getSupplyCargoesDeleteStatus`

Информация о статусе удаления грузоместа

`POST /v1/cargoes/delete/status`

`await ozon.supplyDrafts.getSupplyCargoesDeleteStatus(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesAPI_CargoesDeleteStatus)

### `getSupplyCargoesRules`

Чек-лист по установке грузомест FBO

`POST /v1/cargoes/rules/get`

`await ozon.supplyDrafts.getSupplyCargoesRules(input)`

Обязательные поля запроса: `supply_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesAPI_CargoesRulesGet)

### `getSupplyCargoLabelFile`

Получить PDF с этикетками грузовых мест

`GET /v1/cargoes-label/file/{file_guid}`

`await ozon.supplyDrafts.getSupplyCargoLabelFile()`

Обязательные поля запроса: `file_guid`.

> Устарел: 10 апреля 2026 года отключим метод. Переключитесь на /v1/cargoes-label/get. Замена в SDK: `ozon.supplyDrafts.getSupplyCargoLabels(...)` для `POST /v1/cargoes-label/get`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesAPI_CargoesLabelFile)

### `getSupplyCargoLabels`

Получить идентификатор этикетки для грузомест

`POST /v1/cargoes-label/get`

`await ozon.supplyDrafts.getSupplyCargoLabels(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/CargoesAPI_CargoesLabelGet)

### `getSupplyDraftInfo`

Получить информацию о черновике заявки на поставку

`POST /v2/draft/create/info`

`await ozon.supplyDrafts.getSupplyDraftInfo(input)`

Обязательные поля запроса: `draft_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DraftCreateInfo)

### `getSupplyDraftTimeslots`

Получить список доступных таймслотов

`POST /v2/draft/timeslot/info`

`await ozon.supplyDrafts.getSupplyDraftTimeslots(input)`

Обязательные поля запроса: `date_from`, `date_to`, `draft_id`, `selected_cluster_warehouses`, `supply_type`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DraftTimeslotInfo)

### `getSupplyOrderFromDraftStatus`

Получить информацию о создании заявки на поставку

`POST /v2/draft/supply/create/status`

`await ozon.supplyDrafts.getSupplyOrderFromDraftStatus(input)`

Обязательные поля запроса: `draft_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DraftSupplyCreateStatus)

### `listSupplyClustersV1`

Информация о кластерах и их складах

`POST /v1/cluster/list`

`await ozon.supplyDrafts.listSupplyClustersV1(input)`

Обязательные поля запроса: `cluster_type`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyDraftAPI_DraftClusterList)

### `listSupplyClustersV2`

Получить информацию о макролокальных кластерах

`POST /v2/cluster/list`

`await ozon.supplyDrafts.listSupplyClustersV2()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/DraftClusterList)

## `supplyOrders`

Рекомендуемые алиасы без версии:

- `getSupplyOrders` → `getSupplyOrdersV3`
- `listSupplyOrders` → `listSupplyOrdersV3`
- `listSupplyOrderTimeslots` → `listSupplyOrderTimeslotsV2`

### `acceptSupplyOrderAct`

Согласовать акт

`POST /v1/supply-order/act/accept`

`await ozon.supplyOrders.acceptSupplyOrderAct(input)`

Обязательные поля запроса: `act_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderActAccept)

### `cancelSupplyOrder`

Отменить заявку на поставку

`POST /v1/supply-order/cancel`

`await ozon.supplyOrders.cancelSupplyOrder(input)`

Обязательные поля запроса: `order_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderAPI_SupplyOrderCancel)

### `countSupplyOrdersByStatus`

Количество заявок по статусам

`POST /v1/supply-order/status/counter`

`await ozon.supplyOrders.countSupplyOrdersByStatus()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderAPI_SupplyOrderStatusCounter)

### `createSupplyOrderPass`

Указать данные о водителе и автомобиле

`POST /v1/supply-order/pass/create`

`await ozon.supplyOrders.createSupplyOrderPass(input)`

Обязательные поля запроса: `supply_order_id`, `vehicle`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderAPI_SupplyOrderPassCreate)

### `getSupplyOrderActAcceptanceStatus`

Получить статус согласования акта

`POST /v1/supply-order/act/accept/status`

`await ozon.supplyOrders.getSupplyOrderActAcceptanceStatus(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderActAcceptStatus)

### `getSupplyOrderActProducts`

Получить информацию о товарах в акте

`POST /v1/supply-order/act/product/get`

`await ozon.supplyOrders.getSupplyOrderActProducts(input)`

Обязательные поля запроса: `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderActProductGet)

### `getSupplyOrderActSummary`

Получить информацию об акте

`POST /v1/supply-order/act/summary/get`

`await ozon.supplyOrders.getSupplyOrderActSummary(input)`

Обязательные поля запроса: `order_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderActSummaryGet)

### `getSupplyOrderBundle`

Состав поставки или заявки на поставку

`POST /v1/supply-order/bundle`

`await ozon.supplyOrders.getSupplyOrderBundle(input)`

Обязательные поля запроса: `bundle_ids`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderBundle)

### `getSupplyOrderCancelStatus`

Получить статус отмены заявки на поставку

`POST /v1/supply-order/cancel/status`

`await ozon.supplyOrders.getSupplyOrderCancelStatus(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderAPI_SupplyOrderCancelStatus)

### `getSupplyOrderContentUpdateStatus`

Информация о статусе редактирования товарного состава

`POST /v1/supply-order/content/update/status`

`await ozon.supplyOrders.getSupplyOrderContentUpdateStatus(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderAPI_SupplyOrderContentUpdateStatus)

### `getSupplyOrderDetails`

Получить подробную информацию о заявке на поставку

`POST /v1/supply-order/details`

`await ozon.supplyOrders.getSupplyOrderDetails(input)`

Обязательные поля запроса: `order_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderAPI_SupplyOrderDetails)

### `getSupplyOrderPassStatus`

Статус ввода данных о водителе и автомобиле

`POST /v1/supply-order/pass/status`

`await ozon.supplyOrders.getSupplyOrderPassStatus(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderAPI_SupplyOrderPassStatus)

### `getSupplyOrdersV3`

Информация о заявке на поставку

`POST /v3/supply-order/get`

`await ozon.supplyOrders.getSupplyOrdersV3(input)`

Обязательные поля запроса: `order_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderGet)

### `getSupplyOrderTimeslotStatus`

Статус интервала поставки

`POST /v1/supply-order/timeslot/status`

`await ozon.supplyOrders.getSupplyOrderTimeslotStatus(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderAPI_GetSupplyOrderTimeslotStatus)

### `listSupplyOrdersV3`

Список заявок на поставку на склад Ozon

`POST /v3/supply-order/list`

`await ozon.supplyOrders.listSupplyOrdersV3(input)`

Обязательные поля запроса: `filter`, `limit`, `sort_by`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderList)

### `listSupplyOrderTimeslotsV1`

Интервалы поставки

`POST /v1/supply-order/timeslot/get`

`await ozon.supplyOrders.listSupplyOrderTimeslotsV1(input)`

Обязательные поля запроса: `supply_order_id`.

> Устарел: Метод устаревает и будет отключён 19 августа 2026 года. Переключитесь на /v2/supply-order/timeslot/list. Замена в SDK: `ozon.supplyOrders.listSupplyOrderTimeslotsV2(...)` для `POST /v2/supply-order/timeslot/list`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderAPI_GetSupplyOrderTimeslots)

### `listSupplyOrderTimeslotsV2`

Получить список доступных интервалов поставки

`POST /v2/supply-order/timeslot/list`

`await ozon.supplyOrders.listSupplyOrderTimeslotsV2(input)`

Обязательные поля запроса: `order_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderTimeslotList)

### `updateSupplyOrderContent`

Редактирование товарного состава

`POST /v1/supply-order/content/update`

`await ozon.supplyOrders.updateSupplyOrderContent(input)`

Обязательные поля запроса: `order_id`, `supply_id`, `items`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderAPI_SupplyOrderContentUpdate)

### `updateSupplyOrderTimeslot`

Обновить интервал поставки

`POST /v1/supply-order/timeslot/update`

`await ozon.supplyOrders.updateSupplyOrderTimeslot(input)`

Обязательные поля запроса: `supply_order_id`, `timeslot`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderAPI_UpdateSupplyOrderTimeslot)

### `validateSupplyOrderContent`

Проверить новый товарный состав

`POST /v1/supply-order/content/update/validation`

`await ozon.supplyOrders.validateSupplyOrderContent(input)`

Обязательные поля запроса: `new_bundle_id`, `supply_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyOrderContentUpdateValidation)

## `warehouses`

Рекомендуемые алиасы без версии:

- `cancelFbsPickupCourierCall` → `cancelFbsPickupCourierCallV1`
- `checkFbsWarehouseReturnMile` → `checkFbsWarehouseReturnMileV1`
- `createErfbsAggregatorWarehouse` → `createErfbsAggregatorWarehouseV1`
- `createErfbsNonIntegratedWarehouse` → `createErfbsNonIntegratedWarehouseV1`
- `createFbsPickupCourierCall` → `createFbsPickupCourierCallV1`
- `createFbsWarehouse` → `createFbsWarehouseV1`
- `getFbsWarehouseReturnMileInfo` → `getFbsWarehouseReturnMileInfoV1`
- `listDropOffPointsForWarehouseCreate` → `listDropOffPointsForWarehouseCreateV1`
- `listDropOffPointsForWarehouseUpdate` → `listDropOffPointsForWarehouseUpdateV1`
- `listDropOffTimeslotsForWarehouseCreate` → `listDropOffTimeslotsForWarehouseCreateV1`
- `listDropOffTimeslotsForWarehouseUpdate` → `listDropOffTimeslotsForWarehouseUpdateV1`
- `listFbsPickupHistory` → `listFbsPickupHistoryV1`
- `listFbsPickupPlanning` → `listFbsPickupPlanningV1`
- `listPickUpTimeslotsForWarehouseCreate` → `listPickUpTimeslotsForWarehouseCreateV1`
- `listPickUpTimeslotsForWarehouseUpdate` → `listPickUpTimeslotsForWarehouseUpdateV1`
- `listReturnPointsForWarehouseCreate` → `listReturnPointsForWarehouseCreateV1`
- `listReturnPointsForWarehouseUpdate` → `listReturnPointsForWarehouseUpdateV1`
- `listWarehouses` → `listWarehousesV2`
- `pauseRfbsWarehouse` → `pauseRfbsWarehouseV1`
- `unpauseRfbsWarehouse` → `unpauseRfbsWarehouseV1`
- `updateErfbsAggregatorDeliveryMethod` → `updateErfbsAggregatorDeliveryMethodV1`
- `updateErfbsNonIntegratedDeliveryMethod` → `updateErfbsNonIntegratedDeliveryMethodV1`
- `updateErfbsWarehouse` → `updateErfbsWarehouseV1`
- `updateFbsWarehouse` → `updateFbsWarehouseV1`
- `updateFbsWarehouseFirstMile` → `updateFbsWarehouseFirstMileV1`

### `archiveFbsWarehouse`

Перенести склад в архив

`POST /v1/warehouse/archive`

`await ozon.warehouses.archiveFbsWarehouse(input)`

Обязательные поля запроса: `reason`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/ArchiveWarehouseFBS)

### `cancelFbsPickupCourierCallV1`

Отменить вызов курьера на забор отгрузки pick-up

`POST /v1/warehouse/fbs/pickup/courier/cancel`

`await ozon.warehouses.cancelFbsPickupCourierCallV1(input)`

Обязательные поля запроса: `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFbsPickUpCourierCancel)

### `checkFbsWarehouseReturnMileV1`

Проверить необходимость установки возвратной мили на склад

`POST /v1/warehouse/fbs/return-mile/check`

`await ozon.warehouses.checkFbsWarehouseReturnMileV1(input)`

Обязательные поля запроса: `country_code`, `first_mile_type`, `is_kgt`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFbsReturnMileCheck)

### `createErfbsAggregatorWarehouseV1`

Создать склад с методом доставки «Партнёры Ozon»

`POST /v1/warehouse/erfbs/aggregator/create`

`await ozon.warehouses.createErfbsAggregatorWarehouseV1(input)`

Обязательные поля запроса: `address_coordinates`, `delivery_method`, `name`, `phone`, `timetable_warehouse`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseERFBSAggregatorCreate)

### `createErfbsNonIntegratedWarehouseV1`

Создать склад с методом доставки «Вы или сторонняя служба»

`POST /v1/warehouse/erfbs/non-integrated/create`

`await ozon.warehouses.createErfbsNonIntegratedWarehouseV1(input)`

Обязательные поля запроса: `address_coordinates`, `delivery_method`, `name`, `phone`, `timetable_warehouse`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseERFBSNonIntegratedCreate)

### `createFbsPickupCourierCallV1`

Создать вызов курьера на забор отгрузки pick-up

`POST /v1/warehouse/fbs/pickup/courier/create`

`await ozon.warehouses.createFbsPickupCourierCallV1(input)`

Обязательные поля запроса: `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFbsPickUpCourierCreate)

### `createFbsWarehouseV1`

Создать склад

`POST /v1/warehouse/fbs/create`

`await ozon.warehouses.createFbsWarehouseV1(input)`

Обязательные поля запроса: `address_coordinates`, `cut_in_time`, `first_mile_type`, `is_kgt`, `name`, `phone`, `timeslot_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseAPI_CreateWarehouseFBS)

### `getFbsWarehouseOperationStatus`

Получить статус операции

`POST /v1/warehouse/operation/status`

`await ozon.warehouses.getFbsWarehouseOperationStatus(input)`

Обязательные поля запроса: `operation_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/GetWarehouseFBSOperationStatus)

### `getFbsWarehouseReturnMileInfoV1`

Получить информацию о возвратной миле

`POST /v1/warehouse/fbs/return-mile/info`

`await ozon.warehouses.getFbsWarehouseReturnMileInfoV1(input)`

Обязательные поля запроса: `warehouse_ids`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFBSReturnMileInfo)

### `getWarehouseInvalidProducts`

Получить список товаров с ограничениями по доставке

`POST /v1/warehouse/invalid-products/get`

`await ozon.warehouses.getWarehouseInvalidProducts(input)`

Обязательные поля запроса: `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseInvalidProductsGet)

### `listDropOffPointsForWarehouseCreateV1`

Получить список drop-off пунктов для создания склада

`POST /v1/warehouse/fbs/create/drop-off/list`

`await ozon.warehouses.listDropOffPointsForWarehouseCreateV1(input)`

Обязательные поля запроса: `country_code`, `is_kgt`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseAPI_ListDropOffPointsForCreateFBSWarehouse)

### `listDropOffPointsForWarehouseUpdateV1`

Получить список drop-off пунктов для изменения информации склада

`POST /v1/warehouse/fbs/update/drop-off/list`

`await ozon.warehouses.listDropOffPointsForWarehouseUpdateV1(input)`

Обязательные поля запроса: `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseAPI_ListDropOffPointsForUpdateFBSWarehouse)

### `listDropOffTimeslotsForWarehouseCreateV1`

Получить список таймслотов для создания склада с отгрузкой drop-off

`POST /v1/warehouse/fbs/create/drop-off/timeslot/list`

`await ozon.warehouses.listDropOffTimeslotsForWarehouseCreateV1(input)`

Обязательные поля запроса: `drop_off_point_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFbsCreateDropOffTimeslotList)

### `listDropOffTimeslotsForWarehouseUpdateV1`

Получить список таймслотов для обновления склада с отгрузкой drop-off

`POST /v1/warehouse/fbs/update/drop-off/timeslot/list`

`await ozon.warehouses.listDropOffTimeslotsForWarehouseUpdateV1(input)`

Обязательные поля запроса: `drop_off_point_id`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFbsUpdateDropOffTimeslotList)

### `listFboSellerWarehouses`

Получить список складов продавца

`POST /v1/warehouse/fbo/seller/list`

`await ozon.warehouses.listFboSellerWarehouses()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFboSellerList)

### `listFboSupplyWarehouses`

Поиск точек для отгрузки поставки

`POST /v1/warehouse/fbo/list`

`await ozon.warehouses.listFboSupplyWarehouses(input)`

Обязательные поля запроса: `filter_by_supply_type`, `search`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/SupplyDraftAPI_DraftGetWarehouseFboList)

### `listFbsPickupHistoryV1`

Получить историю отгрузок курьерам

`POST /v1/warehouse/fbs/pickup/history/list`

`await ozon.warehouses.listFbsPickupHistoryV1(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFbsPickUpHistoryList)

### `listFbsPickupPlanningV1`

Получить список складов для планирования отгрузок курьеру

`POST /v1/warehouse/fbs/pickup/planning/list`

`await ozon.warehouses.listFbsPickupPlanningV1()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFbsPickUpPlanningList)

### `listOzonWarehouses`

Получить список складов Ozon

`POST /v1/warehouse/ozon/list`

`await ozon.warehouses.listOzonWarehouses(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseOZONList)

### `listPickUpTimeslotsForWarehouseCreateV1`

Получить список таймслотов для создания склада с отгрузкой pick-up

`POST /v1/warehouse/fbs/create/pick-up/timeslot/list`

`await ozon.warehouses.listPickUpTimeslotsForWarehouseCreateV1(input)`

Обязательные поля запроса: `address_coordinates`, `is_kgt`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFbsCreatePickUpTimeslotList)

### `listPickUpTimeslotsForWarehouseUpdateV1`

Получить список таймслотов для обновления склада с отгрузкой pick-up

`POST /v1/warehouse/fbs/update/pick-up/timeslot/list`

`await ozon.warehouses.listPickUpTimeslotsForWarehouseUpdateV1(input)`

Обязательные поля запроса: `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFbsUpdatePickUpTimeslotList)

### `listReturnPointsForWarehouseCreateV1`

Получить список пунктов возврата для создания склада

`POST /v1/warehouse/fbs/create/return-point/list`

`await ozon.warehouses.listReturnPointsForWarehouseCreateV1(input)`

Обязательные поля запроса: `coordinates`, `country_code`, `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFBSCreateReturnPointList)

### `listReturnPointsForWarehouseUpdateV1`

Получить список пунктов возврата для обновления склада

`POST /v1/warehouse/fbs/update/return-point/list`

`await ozon.warehouses.listReturnPointsForWarehouseUpdateV1(input)`

Обязательные поля запроса: `limit`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseFBSUpdateReturnPointList)

### `listWarehousesV1`

Список складов

`POST /v1/warehouse/list`

`await ozon.warehouses.listWarehousesV1(input)`

Обязательные поля запроса: `limit`.

> Устарел: Метод устаревает и будет отключён 7 апреля 2026 года. Переключитесь на /v2/warehouse/list. Замена в SDK: `ozon.warehouses.listWarehousesV2(...)` для `POST /v2/warehouse/list`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseAPI_WarehouseList)

### `listWarehousesV2`

Список складов

`POST /v2/warehouse/list`

`await ozon.warehouses.listWarehousesV2(input)`

Обязательные поля запроса: `limit`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseListV2)

### `listWarehousesWithInvalidProducts`

Получить список складов с ограниченными для доставки товарами

`POST /v1/warehouse/warehouses-with-invalid-products`

`await ozon.warehouses.listWarehousesWithInvalidProducts()`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseWithInvalidProducts)

### `pauseRfbsWarehouseV1`

Поставить rFBS-склад на паузу

`POST /v1/warehouse/rfbs/pause`

`await ozon.warehouses.pauseRfbsWarehouseV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseRfbsPause)

### `unarchiveFbsWarehouse`

Перенести склад из архива

`POST /v1/warehouse/unarchive`

`await ozon.warehouses.unarchiveFbsWarehouse(input)`

Обязательные поля запроса: `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/UnarchiveWarehouseFBS)

### `unpauseRfbsWarehouseV1`

Снять rFBS-склад с паузы

`POST /v1/warehouse/rfbs/unpause`

`await ozon.warehouses.unpauseRfbsWarehouseV1(input)`

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseRfbsUnpause)

### `updateErfbsAggregatorDeliveryMethodV1`

Обновить метод доставки «Партнёры Ozon»

`POST /v1/warehouse/erfbs/aggregator/delivery-method/update`

`await ozon.warehouses.updateErfbsAggregatorDeliveryMethodV1(input)`

Обязательные поля запроса: `warehouse_id`, `delivery_method_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseERFBSAggregatorDeliveryMethodUpdate)

### `updateErfbsNonIntegratedDeliveryMethodV1`

Обновить метод доставки «Вы или сторонняя служба»

`POST /v1/warehouse/erfbs/non-integrated/delivery-method/update`

`await ozon.warehouses.updateErfbsNonIntegratedDeliveryMethodV1(input)`

Обязательные поля запроса: `courier_cutoff`, `cut_in`, `delivery_method_id`, `name`, `return_settings`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseERFBSNonIntegratedDeliveryMethodUpdate)

### `updateErfbsWarehouseV1`

Обновить склад

`POST /v1/warehouse/erfbs/update`

`await ozon.warehouses.updateErfbsWarehouseV1(input)`

Обязательные поля запроса: `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/WarehouseERFBSUpdate)

### `updateFbsWarehouseFirstMileV1`

Обновить первую милю

`POST /v1/warehouse/fbs/first-mile/update`

`await ozon.warehouses.updateFbsWarehouseFirstMileV1(input)`

Обязательные поля запроса: `cut_in_time`, `first_mile_type`, `timeslot_id`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/UpdateWarehouseFBSFirstMile)

### `updateFbsWarehouseV1`

Обновить склад

`POST /v1/warehouse/fbs/update`

`await ozon.warehouses.updateFbsWarehouseV1(input)`

Обязательные поля запроса: `address_coordinates`, `warehouse_id`.

[Официальная документация Ozon](https://docs.ozon.ru/api/seller/#operation/UpdateWarehouseFBS)
