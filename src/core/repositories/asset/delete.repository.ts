export interface IDeleteAssetRepository {
  delete(id: string): Promise<void>;
}
