import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('answer')
export class AnswerController {
    constructor(private readonly answerService : AnswerService){}

    @Post()
    async addAnswer(@Body() data){
        return await this.answerService.add(data)
    }
}
