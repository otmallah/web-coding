import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('changePassword')
    async changePassword(@Body() body, @Req() req) : Promise<any> {
        return this.userService.changePassword(body, req)
    }

    @Get('liked/:id')
    async listLikedQUestion(@Param(':id') id) {
        this.userService.getListOfliked(id)
    }
}
