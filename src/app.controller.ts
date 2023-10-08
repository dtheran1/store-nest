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

  @Get('products/filter') // Rutas
  getProductFilter() {
    return `Soy un filter`;
  }
  // ! Si tenemos una ruta con un ID dinamico debemos colocarla despues de una ruta sin dinamismo porque se vera refleajdo el 'filter' como si fuera un ID.

  @Get('products/:id') // Rutas
  getProduct(@Param('id') id: string) {
    return `Soy el producto ${id}`;
  }

  @Get('categories/:id/products/:productId') // Rutas
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `Soy la categoria ${id} y tengo el producto ${productId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100, // Si no se pasa valor por defecto es 100
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
    // @Query() params: any,
  ) {
    // const { limit, offset, brand } = params;
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  // products?limit=12&offset=333
}
