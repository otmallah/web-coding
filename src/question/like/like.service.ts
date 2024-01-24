import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class LikeService {
    constructor(private readonly db : DbService){}


    // in this servive we will add like to a specific question to make user list all liked question
    async add(data) {
        try {
            const question = await this.db.question.findUnique({ where : { id : data.questionId}})
            if (question)
            {
                await this.db.like.create(
                    {
                        data : {
                            question : {connect : {id : data.questionId}},
                            user : { connect : {id : data.userId}},
                        }
                    }
                )
            }
        }catch(error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'question id not found, try another id',
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
    }
}
