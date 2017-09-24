import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[hugeText]'
})

export class HugeTextDirective {

    constructor(private el: ElementRef) {
        this.el.nativeElement.style.fontSize = '100px';
    }
}
