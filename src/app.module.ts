import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    JwtModule.register({}),
    DbModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    QuestionModule,
    AnswerModule,
    NotificationModule,
  ],
  controllers : [],
  providers: []
})
export class AppModule {}
