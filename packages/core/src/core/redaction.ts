const SENSITIVE_HEADERS = new Set([
  "api-key",
  "authorization",
  "client-id",
  "cookie",
]);

export function redactHeaders(
  headers: Headers | Readonly<Record<string, string>>,
): Readonly<Record<string, string>> {
  const entries =
    headers instanceof Headers
      ? [...headers.entries()]
      : Object.entries(headers);

  return Object.freeze(
    Object.fromEntries(
      entries.map(([name, value]) => [
        name,
        SENSITIVE_HEADERS.has(name.toLowerCase()) ? "[REDACTED]" : value,
      ]),
    ),
  );
}

export function redactUrl(url: URL): string {
  return `${url.origin}${url.pathname}`;
}
