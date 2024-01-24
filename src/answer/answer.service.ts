import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AnswerService {
    constructor(private readonly db:DbService){}

    async add(data) {
        try {
            const question = await this.db.question.findUnique({where : {id : data.questionId}})
            await this.db.answer.create(
                {
                    data : {
                        description : data.description,
                        question : {
                            connect : {id : question.id}
                        }
                    }
                }
            )
            return {'message' : 'answer add to question'}

        }catch(error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'check the question id, try again',
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
    }
}
