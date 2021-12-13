export type CreateAssetUseCaseRequestDTO = {
  imageUrl: string;
  name: string;
  description: string;
  model: string;
  owner: string;
  status: 'Running' | 'Alerting' | 'Stopped';
  unitId: string;
  file?: any;
};
