export interface GetQuestionCountV1Response {
  readonly all?: number;
  readonly new?: number;
  readonly processed?: number;
  readonly unprocessed?: number;
  readonly viewed?: number;
}
