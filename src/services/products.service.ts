import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entiti';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private productsList: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product 1 description',
      price: 100,
      image: '',
      stock: 10,
    },
  ];

  findAll() {
    return this.productsList;
  }

  findOne(id: number) {
    return this.productsList.find((product) => product.id === id);
  }

  create(payload: any) {
    const newProduct = { id: this.productsList.length + 1, ...payload };
    this.productsList.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const index = this.productsList.findIndex((product) => product.id == id);
    if (index >= 0) {
      this.productsList[index] = {
        ...this.productsList[index],
        ...payload,
      };

      return this.productsList[index];
    }

    return null;
  }
}
