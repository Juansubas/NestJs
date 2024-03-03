import { Task, TaskStatus } from "../task.entity"
import { IsEnum, IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title : string;

    @IsString()
    description : string;
}

export class UpdateTaskDto{
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;
}