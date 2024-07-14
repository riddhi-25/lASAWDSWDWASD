// long-press.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLongPress]'
})
export class LongPressDirective {
  constructor(private elementRef: ElementRef) { }

  private timeout: any;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.timeout = setTimeout(() => {
      this.elementRef.nativeElement.dispatchEvent(new CustomEvent('longPress'));
    }, 500);
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    clearTimeout(this.timeout);
  }
}