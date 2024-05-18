import {Controller, Get} from "@nestjs/common";

@Controller({})
export class TasksController{

    @Get('/tasks')
    getAllTask(){
        return 'Obteniendo todas las tareas';
    }
}