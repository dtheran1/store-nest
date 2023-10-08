import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo') // Rutas
  newEndpoint(): string {
    return 'Hola soy nuevo';
  }

  @Get('otro') // Rutas
  otro(): string {
    return 'Soy otro endpoint';
  }

  
}
