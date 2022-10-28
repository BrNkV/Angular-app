import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.servece';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  // нужно добавить сервис productService и modalService
  constructor(
    private productService: ProductsService,
    private modalService: ModalService
  ) { }


  // новая форма, которую мы сможем использовать в шаблоне
  // обязательно импорт import { ReactiveFormsModule } from '@angular/forms' в app.module.ts и добавить в импорт ReactiveFormsModule
  form = new FormGroup({
    title: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }


  ngOnInit(): void {
  }

  submit() {
    console.log(this.title);
    console.log(this.form.value);
    this.productService.create({
      title: this.form.value as string,
      price: 13.5,
      description: 'string',
      image: 'string',
      category: 'string',
      rating: {
        rate: 42,
        count: 1
      }
      // необходимо добавить подписку на стрим, иначе не будет работать запрос, это оптимизация в Ангуляре
    }).subscribe(() => {
      this.modalService.close();
    })
  }

}
