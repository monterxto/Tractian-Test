type IAssetDTO = {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  model: string;
  owner: string;
  status: 'Running' | 'Alerting' | 'Stopped';
  healthLevel: number;
  unitId: string;
};
export type FindUnitByIdWithAssetsUseCaseResponseDTO = {
  id: string;
  name: string;
  companyId: string;
  address: string;
  assets: IAssetDTO[];
};
