import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/product'

// импорт тестового продукта
// import { products as data, products } from './data/products';
import { ProductsService } from './services/products.servece'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'angular-app';


//   /**
//    *использование данных интерфейса тестового продукта
//    * products: IProduct[] = data;
//    *
//    *  */
// }


/**
 *для использования life cycle хуков необходима инициализация компонента при загрузке,
 *для этого необходимо имплементироваться от интерфейса OnInit
 */
export class AppComponent implements OnInit {
  title = 'angular-app'
  products: IProduct[] = []

  // для полдключения сервиса мы реализовываем конструктор
  constructor(private productsService: ProductsService) {

  }

  //обязательный метод для реализации
  ngOnInit(): void {
    // т.к.данный метод возвращает string мы можем подписаться на нее, передаем в подпись callback продукты
    this.productsService.getAll().subscribe(products => {

      // console.log(products)

      //присвоим нашему массиву продуктов products: IProduct[] = [] полученные продукты
      // у метода getAll должен быть прописан дженерик
      this.products = products

    })
  }
}
