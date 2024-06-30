import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('/tasks')
@ApiTags('tasks')
export class TasksController{


    constructor(private tasksService: TasksService){
    }

    @Get()
    @ApiOperation({ summary: 'Get all Tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    getAllTask(@Query() query : any){
        console.log(query);
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string){
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    @ApiOperation({ summary: 'Create Tasks' })
    createTask(@Body() task: CreateTaskDto){
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(task);
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