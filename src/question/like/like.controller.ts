import { Body, Controller, Post } from '@nestjs/common';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {
    constructor(private readonly likeService : LikeService){}

    @Post()
    async addToQuestion(@Body() data) {
        await this.likeService.add(data)
    }
}
