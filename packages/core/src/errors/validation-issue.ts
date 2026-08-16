export interface ValidationIssue {
  readonly code: string;
  readonly path: readonly (string | number)[];
  readonly message: string;
  readonly expected?: string;
  readonly received?: string;
}
