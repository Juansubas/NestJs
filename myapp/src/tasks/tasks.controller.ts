import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query} from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TasksController{


    constructor(private tasksService: TasksService){
    }

    @Get()
    getAllTask(@Query() query : any){
        console.log(query);
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string){
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task: any){
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(){
        return this.tasksService.updateTask();
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask();
    }

    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
    }
}