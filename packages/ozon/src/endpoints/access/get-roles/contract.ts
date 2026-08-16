import { array, object, string, type Schema } from "@safe-shape/core";
import { rfc3339DateTimeSchema } from "../../../contracts/rfc3339-date-time.js";
import type { GetRolesResponse } from "./types.js";

const ozonRoleSchema = object({
  name: string().optional(),
  methods: array(string()).optional(),
});

/** @internal */
export const getRolesResponseSchema: Schema<GetRolesResponse> = object({
  expires_at: rfc3339DateTimeSchema.nullable().optional(),
  roles: array(ozonRoleSchema).optional(),
});
