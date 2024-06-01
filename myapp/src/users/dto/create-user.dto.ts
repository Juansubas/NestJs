import { IsEmail, IsNotEmpty, IsString, Max } from "class-validator";

export class CreateUserDto{

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @Max(100)
    age: number;
}