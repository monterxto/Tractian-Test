export class InvalidParamError extends Error {
  constructor(public paramName: string) {
    super(`Invalid param: ${paramName}`);
    this.name = 'InvalidParamError';
  }
}
