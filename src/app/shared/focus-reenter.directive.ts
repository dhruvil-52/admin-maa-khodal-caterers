import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[focusReenter]'
})
export class FocusReenterDirective {

    constructor(private el: ElementRef) { }

    @HostListener('blur')
    onBlur() {
        setTimeout(() => {
            this.el.nativeElement.focus();
        }, 0);
    }
}
