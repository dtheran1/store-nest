import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAllBrands() {
    return 'Aqui obtenemos todas las marcas';
  }

  @Get(':id')
  getBrandById(@Param('id') id: string) {
    return `Aqui obtenemos una marca por id -> ${id}`;
  }
}
