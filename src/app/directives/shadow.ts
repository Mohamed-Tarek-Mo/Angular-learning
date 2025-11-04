import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShadow]',
  host: {
    '(mouseover)': 'onmouseover()',
    '(mouseout)': 'onmouseout()',
  },
})
export class Shadow {
  constructor(private el: ElementRef) {}

  onmouseover() {
    this.el.nativeElement.parentElement.classList.add('shadow-lg');
  }
  onmouseout() {
    this.el.nativeElement.parentElement.classList.remove('shadow-lg');
  }
}
