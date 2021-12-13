export type AssetIdRequestDto = {
  id: string;
};

export type UpdateAssetUseCaseRequestDTO = {
  imageUrl: string;
  name: string;
  description: string;
  model: string;
  owner: string;
  status: 'Running' | 'Alerting' | 'Stopped';
  healthLevel: number;
  unitId: string;
};
