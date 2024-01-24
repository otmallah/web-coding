import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import * as argon from 'argon2';

@Injectable()
export class UserService {
    constructor(private readonly db: DbService){}

    async changePassword(data, req) {
        try{
            // check if the user valide or not 
            const user = await this.db.user.findUnique({where : { email : req.user.email }})
            if (user)
            {
                // here we will change the password
                const hash = await argon.hash(data.password);
                await this.db.user.update(
                    {where : {
                        id : user.id
                    },
                    data : {
                        password : hash
                    }
                }
                )
            }
        }catch(error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'can\'t change the password , try another username',
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
    }


    async getListOfliked(id) {
        try {
            return await this.db.user.findUnique({
                where : {id : id } , include : { liked : true}
            })
        }  catch(error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'can\'t change the password , try another username',
            }, HttpStatus.FORBIDDEN, {
                cause: error
            });
        } 
    }
}
