import { Request, Response } from "express";
import { CreateUserInputDto } from "../dtos/create-user-request.dto";
import { CreateUserService } from "../services/create-user.service";

export class CreateUserController {
  service: CreateUserService;

  constructor() {
    this.service = new CreateUserService();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body as CreateUserInputDto;
      const responseBody = await this.service.execute(body);

      return res.status(201).send(responseBody);
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}
