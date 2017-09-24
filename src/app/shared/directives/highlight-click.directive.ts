import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightClick]'
})
export class HighlightClickDirective {

  constructor(private el: ElementRef) {

  }

  @HostBinding('style.color') elementColor = 'green';

  @HostListener('click') elementClick() {
    this.el.nativeElement.style.backgroundColor = 'blue';
    this.elementColor = 'red';
  }

  @HostListener('mouseleave') elementMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'red';
    this.elementColor = 'yellow';
  }

}
