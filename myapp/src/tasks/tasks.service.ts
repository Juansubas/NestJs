import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    private tasks = [];

    getTasks() {
        return this.tasks;
    }

    getTask(id : number) {

        const taskFound = this.tasks.find(task => task.id === id);

        if(!taskFound) {
            return new NotFoundException('La tarea con ese id no fue encontrada');
        }
        return taskFound;
    }

    createTask(task : CreateTaskDto) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task;
    }

    updateTask(task : UpdateTaskDto) {
        console.log(task);
        return 'Actualizando Tareas';
    }

    deleteTask() {
        return 'Eliminando Tarea';
    }

    updateTaskStatus() {
        return 'Actualizando parcialmente Tareas';
    }
}