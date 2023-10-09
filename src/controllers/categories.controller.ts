import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId') // Rutas
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `Soy la categoria ${id} y tengo el producto ${productId}`;
  }

  @Get() // Rutas
  getAll() {
    return 'Todas las categorias';
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Category created',
      payload,
    };
  }
}
