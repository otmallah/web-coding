import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtStrategy } from './strategy';

@Module({
  imports: [JwtModule.register({})],
  providers: [AuthService, jwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
