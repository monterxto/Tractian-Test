export class MissingParamError extends Error {
  constructor(public paramName: string) {
    super(`Missing param: ${paramName}`);
    this.name = 'MissingParamError';
  }
}
