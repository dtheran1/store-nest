import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { Response, response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('filter') // Rutas
  getProductFilter() {
    return `Soy un filter`;
  }
  // ! Si tenemos una ruta con un ID dinamico debemos colocarla despues de una ruta sin dinamismo porque se vera refleajdo el 'filter' como si fuera un ID.

  @Get(':id') // Rutas
  @HttpCode(HttpStatus.ACCEPTED) // Establecemos un codigo de respuesta
  getProduct(@Res() res: Response, @Param('id') id: string) {
    // Podemos utilizar los status de Express pero lo mas recomendable es usar los decoradores de nest, ahorramos tiempo
    res.status(200).send({
      message: `Producto con id ${id}`,
      id,
    });
    // return {
    //   message: `Producto con id ${id}`,
    //   id,
    // };
  }

  @Get()
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

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Product created',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      message: 'Product updated',
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
