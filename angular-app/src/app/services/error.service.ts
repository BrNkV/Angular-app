import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// отдельный простой сервис для работы с ошибками
export class ErrorService {
  // сделаем ошибку стримом
  // с помощью Subject сможем динамически триггерить изменения данных об ошибке
  error$ = new Subject<string>()

  handle(message: string) {
    // c помощью метода next произодится уведомление всех подписчиков
    this.error$.next(message)
  }
  // метод для очистки ошибки
  clear() {
    this.error$.next('')
  }
}
