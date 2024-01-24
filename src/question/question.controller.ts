import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { QuestionService } from './question.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService){}

    @Post()
    async creatQuestion(@Body() data) : Promise<any>
    {
        return await this.questionService.add(data)
    }

    @Get(':id')
    async getQuestion(@Param('id') id: Number) : Promise<any> {
        return await this.questionService.getById(id)
    }

    
    @Post('likes')
    async getLikesOfQuestion(@Body() data) : Promise<any> {
        return await this.questionService.likeQuestion(data)
    }
}
