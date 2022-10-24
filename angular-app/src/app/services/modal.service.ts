import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


/**
 * Сервис для работы с модалкой
 * нуджно добавить в app.components в конструктор
 * добавить в <app-modal *ngIf="modalService.isVisible$ | async"
 * 1 определение видимости
 * 2
 */
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  // стрим видимости
  // BehaviorSubject идет с начальным значением
  isVisible$ = new BehaviorSubject<boolean>(false)

  constructor() { }

  open(){
    this.isVisible$.next(true)
  }

  close(){
    this.isVisible$.next(false)
  }
}
