export interface IDeleteCompanyRepository {
  delete(id: string): Promise<void>;
}
