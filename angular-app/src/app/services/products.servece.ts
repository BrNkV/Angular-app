import { Injectable } from "@angular/core"

// необходимо заимпортить в AppModule
import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"
import { IProduct } from '../models/product'
import { __values } from "tslib"

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
  constructor(private http: HttpClient) {
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
      params: new HttpParams({
        fromString: 'limit=5'
      })
    })
  }
}
