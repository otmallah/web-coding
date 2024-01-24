import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { LikeModule } from './like/like.module';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService],
  imports: [LikeModule]
})
export class QuestionModule {}
