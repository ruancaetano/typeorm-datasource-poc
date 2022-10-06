import { IsEmail, IsString } from "class-validator";
export class CreateUserInputDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

export interface CreateUserOutputDto {
  id: string;
  name: string;
  email: string;
}
