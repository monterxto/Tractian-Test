import {
  CreateAssetUseCaseRequestDTO,
  CreateAssetUseCaseResponseDTO,
} from '@/core/usecases/asset/create/dto';
import { ICreateAssetUseCase } from '@/core/usecases/asset/create';
import { CreateAssetController } from '@/Application/controllers/asset';
import { Validation } from '@/Application/protocols';
import { mock, MockProxy } from 'jest-mock-extended';

describe('Create asset controller', () => {
  let mockCreateUseCase: MockProxy<ICreateAssetUseCase>;
  let mockValidation: MockProxy<Validation>;
  let createAssetController: CreateAssetController;

  const mockAssetDtoRequest: CreateAssetUseCaseRequestDTO = {
    imageUrl: 'imageUrl',
    name: 'asset name',
    description: 'asset description',
    model: 'ABC-123',
    owner: 'Uepa',
    status: 'Running',
    unitId: '61b621194502dfe91af1bae4',
  };

  const mockAssetDtoResponse: CreateAssetUseCaseResponseDTO = {
    id: 'id',
    imageUrl: mockAssetDtoRequest.imageUrl,
    name: mockAssetDtoRequest.name,
    description: mockAssetDtoRequest.description,
    model: mockAssetDtoRequest.model,
    owner: mockAssetDtoRequest.owner,
    status: mockAssetDtoRequest.status,
    healthLevel: 100,
    unitId: mockAssetDtoRequest.unitId,
  };

  beforeEach(() => {
    mockCreateUseCase = mock<ICreateAssetUseCase>();
    mockValidation = mock<Validation>();

    createAssetController = new CreateAssetController(mockCreateUseCase, mockValidation);
  });

  it('should call create use case', async () => {
    mockCreateUseCase.execute.mockResolvedValue(mockAssetDtoResponse);

    const result = await createAssetController.handle(mockAssetDtoRequest);

    const mockResultHttp = {
      body: mockAssetDtoResponse,
      statusCode: 201,
    };

    expect(result).toEqual(mockResultHttp);
  });
});
