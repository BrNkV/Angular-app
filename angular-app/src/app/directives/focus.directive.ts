import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})

// добавим имплементацию от двух классов OnInit, AfterViewInit
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    // !!для примера, так реализация будет в ngOnInit()
    // возможно управлять элементом - например добавить фокус на инпут, дялее директиву добавляем в create-product.component
    // this.el.nativeElement.focus()
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.el.nativeElement.focus()
  }
}
