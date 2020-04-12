import { NgModule } from '@angular/core';
import { CursorPointerDirective } from './cursor-pointer-on-hover.directive';


@NgModule({
  declarations: [
    CursorPointerDirective
  ],
  exports: [
    CursorPointerDirective
  ]
})
export class CursorPointerModule { }

