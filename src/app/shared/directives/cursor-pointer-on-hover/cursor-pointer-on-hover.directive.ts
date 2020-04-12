import { Directive, ElementRef, HostListener, Renderer2   } from '@angular/core';


@Directive({
  selector: '[cursorPointer]'
})
export class CursorPointerDirective {


  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) {}

  @HostListener('mouseover')
  hoverOn(){
    this.render.setStyle(this.el.nativeElement , 'cursor' , 'pointer' )
  }


}

