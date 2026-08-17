// Generated runtime response contract for this Wildberries endpoint.
import { generalComponents } from "../../../contracts/general.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1TariffConstructorOptionsResponse } from "./types.js";

const getV1TariffConstructorOptionsResponse200Schema =
  createWbSchema<GetV1TariffConstructorOptionsResponse>(
    { kind: "ref", name: "PlanBuilderOptionsInfo" },
    generalComponents,
  );

export function parseGetV1TariffConstructorOptionsResponse(
  status: number,
  input: unknown,
): GetV1TariffConstructorOptionsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1TariffConstructorOptionsResponse200Schema,
        input,
        "getV1TariffConstructorOptions",
      );
    default:
      return unexpectedWbSuccessStatus("getV1TariffConstructorOptions", status);
  }
}
