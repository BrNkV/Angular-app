для генерации собственных директив используем 

пример:
ng g d directives/focus --skip-tests

с их помощью можем добавить свой функционал
создавать структурные директивы

в данном примере будем использовать базовый функционал

```
import { Directive } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {
  constructor() { }
}
