import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('hello')
export class HelloController {

    @Get('/')
    index(@Req() request: Request, @Res() response: Response){
        console.log(request.url);
        response.status(200).json({
            message: 'Hello World',
        });
    }

    @Get('something')
    @HttpCode(201)
    somethingNew() {
        return 'Something New';
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found';
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Error Route!!';
    }

}
