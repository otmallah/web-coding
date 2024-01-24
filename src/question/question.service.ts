import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class QuestionService {
    constructor(private readonly db: DbService){}

    // create question
    async add(data) {
        try {
            const user = await this.db.user.findUnique({where : {id : data.userId}}) 
            await this.db.question.create(
                {
                    data : {
                        title : data.title,
                        content : data.content,
                        latitude : data.latitude,
                        longitude : data.longitude,
                        user : { connect : {id : user.id}}
                    }
                }
            )
            return {'message' : 'question has created'}

        }catch(error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'can\'t create the question, try again',
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
    }

    // get question by id
    async getById(data) {
        try {
            var id = parseInt(data)
            return await this.db.question.findUnique({where : { id : id} , include : {Answer : true}})
        }catch(error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'question id not found, try another id',
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
    }

    // number of likes to specific question
    async likeQuestion(data) {
        try {
            // find the question along with its associated likes
            const questionWithLikes = await this.db.question.findUnique({
                where: { id: data.questionId },
                include: { like: true },
            });
            // access the likes array and get its length
            const likeCount = questionWithLikes?.like.length || 0;

            return likeCount;
            
        }catch(error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'question id not found, tru another id',
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
    }
}
