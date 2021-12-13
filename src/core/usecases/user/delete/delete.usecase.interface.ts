import { UserIdRequestDto } from './dto';

export interface IDeleteUserUseCase {
  execute({ id }: UserIdRequestDto): Promise<void>;
}
