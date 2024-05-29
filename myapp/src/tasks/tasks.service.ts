import { Injectable } from '@nestjs/common';

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    getTasks() : User {
        return {
            name: 'John Doe',
            age: 40
        };
    }

    createTask() {
        return 'Creando Tareas';
    }

    updateTask() {
        return 'Actualizando Tareas';
    }

    deleteTask() {
        return 'Eliminando Tarea';
    }

    updateTaskStatus() {
        return 'Actualizando parcialmente Tareas';
    }
}