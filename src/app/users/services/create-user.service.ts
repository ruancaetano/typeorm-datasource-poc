import AppDataSource from "../../../database/app.datasource";
import {
  CreateUserInputDto,
  CreateUserOutputDto,
} from "../dtos/create-user-request.dto";
import { User } from "../entities/user.entity";

export class CreateUserService {
  async execute(input: CreateUserInputDto): Promise<CreateUserOutputDto> {
    const repository = AppDataSource.getRepository(User);

    const createdUser = await repository.save({
      name: input.name,
      email: input.email,
    });

    return {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
    };
  }
}
