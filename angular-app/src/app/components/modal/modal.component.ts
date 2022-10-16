import { Component, Input, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // ждем инпут
  @Input() title: string

  constructor() { }

  ngOnInit(): void {
  }

}
