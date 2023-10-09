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
  // ParseIntPipe,
} from '@nestjs/common';

import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';

import { Response, response } from 'express';
import { ProductsService } from 'src/services/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('filter') // Rutas
  getProductFilter() {
    return `Soy un filter`;
  }
  // ! Si tenemos una ruta con un ID dinamico debemos colocarla despues de una ruta sin dinamismo porque se vera refleajdo el 'filter' como si fuera un ID.

  @Get(':id') // Rutas
  @HttpCode(HttpStatus.ACCEPTED) // Establecemos un codigo de respuesta
  getProduct(@Param('id', ParseIntPipe) id: number) {
    // Con ParseIntPipe parseamos el valor de id a un entero y asi estamos seguros que le pasaremos un number al servicio para que pueda encontrar el dato en BD

    // Podemos utilizar los status de Express pero lo mas recomendable es usar los decoradores de nest, ahorramos tiempo
    // res.status(200).send({
    //   message: `Producto con id ${id}`,
    //   id,
    // });
    // return {
    //   message: `Producto con id ${id}`,
    //   id,
    // };

    return this.productService.findOne(id);
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100, // Si no se pasa valor por defecto es 100
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productService.findAll();
  }

  // products?limit=12&offset=333

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.remove(id);
  }
}
