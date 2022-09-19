import { Injectable } from "@angular/core"

// необходимо заимпортить в AppModule
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http"
import { catchError, delay, Observable, throwError } from "rxjs"
import { IProduct } from '../models/product'
import { ErrorService } from './error.service';

/**
 *  данный сервис является абстрактным слоем работающим с сущностью Product
 * связывает данные с сервером
 * производит запрос на сервер для получения данных
 * используем пакет http client
 * */

// (инъекция)автоматическая регистрация сервиса в корневом модуле
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }
  /**
   * метод делает запрос на сервер и получает данные
   *
   * необходимо прописать типы
   * */
  getAll(): Observable<IProduct[]> {
    // для get необходимо прописать дженерик
    // так же можно передать query параметр в запрос
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      // может принимать в разных форматах
      // 1 params: new HttpParams().append('limit', 5)
      // 2
      // params: new HttpParams({
      //   fromString: 'limit=5'
      // })
      //3
      params: new HttpParams({
        fromObject: { limit: 10 }
      })
      //можно искуственно замедлить с помощью pipe() котор применяется ко всему данному стриму
    }).pipe(
      delay(1000),
      // передадим сюда оператор обработки ошибок
      catchError(this.errorHandler)
    )
  }

  // приватный метод обработки ошибки
  // так же создадим новый сервис к данной ошибке, через CLI с помощью команды: ng(ангуляр) g(генерация) s(сервис) services/error (путь куда реализовать)  "ng g s services/error --skip-tests" или более подробно "ng generate service services/error --skip-tests"
  // получим шаблон angular-app\src\app\services\error.service.ts
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
