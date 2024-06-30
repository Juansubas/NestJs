import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { PrismaService } from 'src/prisma.service';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UsersController]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes(
      {path: '/users', method: RequestMethod.GET },
      {
        path: '/users',
        method: RequestMethod.POST
      },
    )
    .apply(AuthMiddleware)
    .forRoutes('users');
  }
}
