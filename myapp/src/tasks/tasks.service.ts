import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getTasks() {
        return ['Task 1', 'Task 2', 'Task 3'];
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