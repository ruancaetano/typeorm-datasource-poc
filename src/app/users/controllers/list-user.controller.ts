import { Request, Response } from "express";
import { CreateUserInputDto } from "../dtos/create-user-request.dto";
import { CreateUserService } from "../services/create-user.service";
import { ListUserService } from "../services/list-user.service";

export class ListUserController {
  service: ListUserService;

  constructor() {
    this.service = new ListUserService();
  }

  async handle(_: Request, res: Response): Promise<Response> {
    try {
      const responseBody = await this.service.execute();

      return res.status(200).send(responseBody);
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}
