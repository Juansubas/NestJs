import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "@prisma/client";

@Controller()
export class TaskController{

    constructor(private readonly tasksService: TaskService) {}

    @Get()
    async getAllTask(){
        this.tasksService.getAllTasks();
    }
    
    @Post()
    async createTask(@Body() data: Task) {
        this.tasksService.createTask(data);
    }

    @Get(':id')
    async getTaskById(@Param('id') id: string) {
        this.tasksService.getTaskById(Number(id));
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTask(Number(id));
    }

    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() data: Task){
        this.tasksService.updateTask(Number(id), data);
    }
}