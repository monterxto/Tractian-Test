import {
  IFindUnitByIdWithAssetsUseCase,
  FindUnitByIdWithAssetsUseCase,
} from '@/core/usecases/unit/find_by_id_with_assets';
import { IFindUnitByIdRepository } from '@/core/repositories/unit';
import {
  FindUnitByIdWithAssetsUseCaseRequestDTO,
  FindUnitByIdWithAssetsUseCaseResponseDTO,
} from '@/core/usecases/unit/find_by_id_with_assets/dto';
import { IFindByUnitIdAssetRepository } from '@/core/repositories/asset';
import { mock, MockProxy } from 'jest-mock-extended';
import { Asset } from '@/core/entities';
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
type ResultUnitWithAssets = {
  _id: string;
  name: string;
  companyId: string;
  address: string;
  assets: IAssetDTO[];
};
describe('FindByIdWithAssetsUseCase', () => {
  let findByIdWithAssetsUseCase: IFindUnitByIdWithAssetsUseCase;
  let mockUnitRepository: MockProxy<IFindUnitByIdRepository>;
  let mockAssetRepository: MockProxy<IFindByUnitIdAssetRepository>;

  beforeAll(() => {
    mockUnitRepository = mock<IFindUnitByIdRepository>();
    mockAssetRepository = mock<IFindByUnitIdAssetRepository>();

    findByIdWithAssetsUseCase = new FindUnitByIdWithAssetsUseCase(
      mockUnitRepository,
      mockAssetRepository
    );
  });

  it('should return unit when findByIdWithAssets is called', async () => {
    const resultUnitRepository = {
      _id: '5f6d7c2f9e06c933d4a4b4c4b',
      name: 'Unit Test',
      companyId: '5f6d7c2f9e06c933d4a4b4c4d',
      address: 'Rua Teste',
    };

    const resultAssetRepository: Asset[] = [
      new Asset(
        'image.jpg',
        'asset',
        'asset description',
        'asset model',
        'asset owner',
        'Running',
        '5f6d7c2f9e06c933d4a4b4c4c',
        100,
        '5f6d7c2f9e06c933d4a4b4c4b'
      ),
    ];

    mockUnitRepository.findById.mockResolvedValue(resultUnitRepository);
    mockAssetRepository.findByUnitId.mockResolvedValue(resultAssetRepository);
    const request: FindUnitByIdWithAssetsUseCaseRequestDTO = {
      id: '5f6d7c2f9e06c933d4a4b4c4b',
    };

    const response: FindUnitByIdWithAssetsUseCaseResponseDTO = {
      id: resultUnitRepository._id,
      name: resultUnitRepository.name,
      companyId: resultUnitRepository.companyId,
      address: resultUnitRepository.address,
      assets: resultAssetRepository.map((asset) => ({
        id: asset._id,
        imageUrl: asset.imageUrl,
        name: asset.name,
        description: asset.description,
        model: asset.model,
        owner: asset.owner,
        status: asset.status,
        healthLevel: asset.healthLevel,
        unitId: asset.unitId,
      })),
    };

    expect(await findByIdWithAssetsUseCase.execute(request)).toEqual(response);
  });
});
