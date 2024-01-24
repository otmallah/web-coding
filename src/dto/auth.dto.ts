import { IsEmail, IsNotEmpty } from 'class-validator';

export class authDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}


