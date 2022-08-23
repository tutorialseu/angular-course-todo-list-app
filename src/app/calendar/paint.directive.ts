import { Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appPaint]'
})
export class PaintDirective {

  constructor(private elementRef: ElementRef) { }

  @Input()
  color= "Yellow"

  @HostListener('mouseover') onMouseOver(){
    this.elementRef.nativeElement.style.backgroundColor = this.color
  }

  @HostListener('mouseout') onMouseOut(){
    this.elementRef.nativeElement.style.backgroundColor = "White"
  }


}
