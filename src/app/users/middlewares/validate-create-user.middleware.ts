import { validateOrReject, ValidationError } from "class-validator";
import { NextFunction, Response, Request } from "express";
import { CreateUserInputDto } from "../dtos/create-user-request.dto";

export const validateCreateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsedBody = new CreateUserInputDto(
      req.body?.name,
      req.body?.email
    );
    await validateOrReject(parsedBody);

    req.body = parsedBody;

    return next();
  } catch (err) {
    if (Array.isArray(err)) {
      return res.status(400).json(err);
    }

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
