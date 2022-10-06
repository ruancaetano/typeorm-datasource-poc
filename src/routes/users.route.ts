import { Router } from "express";
import { CreateUserController } from "../app/users/controllers/craete-user.controller";
import { ListUserController } from "../app/users/controllers/list-user.controller";
import { validateCreateUserMiddleware } from "../app/users/middlewares/validate-create-user.middleware";

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

usersRoutes.get("/users", listUserController.handle.bind(listUserController));
usersRoutes.post(
  "/users",
  validateCreateUserMiddleware,
  createUserController.handle.bind(createUserController)
);
