import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter') // Rutas
  getProductFilter() {
    return `Soy un filter`;
  }
  // ! Si tenemos una ruta con un ID dinamico debemos colocarla despues de una ruta sin dinamismo porque se vera refleajdo el 'filter' como si fuera un ID.

  @Get(':id') // Rutas
  getProduct(@Param('id') id: string) {
    return `Soy el producto ${id}`;
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
}
