import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
    imports: [],
    providers: [TasksService],
    controllers: [TasksController]
})

export class TasksModule {}