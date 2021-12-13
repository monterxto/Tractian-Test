export type FindAllAssetUseCaseResponseDTO = {
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
