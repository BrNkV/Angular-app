import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  // новая форма, которую мы сможем использовать в шаблоне
  // обязательно импорт import { ReactiveFormsModule } from '@angular/forms' в app.module.ts и добавить в импорт ReactiveFormsModule
  form = new FormGroup({
    title: new FormControl<string>("")
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);
  }

}
