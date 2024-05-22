import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: 'John Doe',
            phone: '1234567890'
        },
        {
            id: 2,
            name: 'John Doe',
            phone: '1234567890'
        }
    ]
    getUsers(){
        return this.users;
    }
}
