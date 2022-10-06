import AppDataSource from "../../../database/app.datasource";
import { ListUserOutputDto } from "../dtos/list-user.request.dto";
import { User } from "../entities/user.entity";

export class ListUserService {
  async execute(): Promise<ListUserOutputDto> {
    const repository = AppDataSource.getRepository(User);

    const foundUsers = await repository.find();

    return foundUsers.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  }
}
