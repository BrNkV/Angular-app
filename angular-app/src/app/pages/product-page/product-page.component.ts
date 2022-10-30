import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.servece';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  title = 'angular-app'
  // products: IProduct[] = []
  loading = false

  //стримы
  // products$: Observable<IProduct[]>

  // поиск по пробуктам
  term = ''

  // для полдключения сервиса мы реализовываем конструктор
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {

  }

  //обязательный метод для реализации
  ngOnInit(): void {
    this.loading = true

    /** первый подход
    // т.к.данный метод возвращает string мы можем подписаться на нее, передаем в подпись callback продукты
    */
    this.productsService.getAll().subscribe(() => {

      // console.log(products)

      //присвоим нашему массиву продуктов products: IProduct[] = [] полученные продукты
      // у метода getAll должен быть прописан дженерик
      // this.products = products
      this.loading = false
    })


    /**
     * второй подход - улучшим код
     * поработаем со стримами
     * используем tap() он никак не изменяет данные просто добавляет функционал
     */
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )

  }
}
