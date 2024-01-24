import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { JwtService } from '@nestjs/jwt';
import { jwtStrategy } from '../auth/strategy';
import { webSocketJwtStrategy } from 'src/auth/strategy/websocket-strategy';

@Module({
  providers: [JwtService, NotificationService, webSocketJwtStrategy]
})
export class NotificationModule {}
