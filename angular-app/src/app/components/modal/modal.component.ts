import { Component, Input, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // ждем инпут
  @Input() title: string

  // после такого инжектирования сервиса, становятся доступны его методы
  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

}
