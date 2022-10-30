import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/product'
import { Observable, tap } from "rxjs"

// импорт тестового продукта
// import { products as data, products } from './data/products'
import { ProductsService } from './services/products.servece';
import { ModalService } from './services/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'angular-app'


//   /**
//    *использование данных интерфейса тестового продукта
//    * products: IProduct[] = data
//    *
//    *  */
// }


/**
 *для использования life cycle хуков необходима инициализация компонента при загрузке,
 *для этого необходимо имплементироваться от интерфейса OnInit
 */
export class AppComponent {

}
