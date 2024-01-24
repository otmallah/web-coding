import { authDTO } from 'src/dto/auth.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: authDTO) {
    return this.authService.signUp(signUpDto);
  }

  @Post('sign-in')
  signIn(@Body() signInDto: authDTO) {
    return this.authService.signIn(signInDto);
  }
}
