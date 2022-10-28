import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  // название котор будем использовать в шаблоне
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  // принимает значение продукты и строку поиска, на выходе продукт
  transform(products: IProduct[], search: string): IProduct[] {

    // логика для отображения фильтрации
    if(search.length === 0) return products
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }

}
