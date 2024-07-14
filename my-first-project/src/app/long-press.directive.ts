import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appLongPress]'
})
export class LongPressDirective {
  constructor(private elementRef: ElementRef) { }

  private timeout: any;

  // @Output() longPress = new EventEmitter<void>();

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.timeout = setTimeout(() => {
      // this.longPress.emit();

      this.elementRef.nativeElement.style.backgroundColor = 'blue'; 
    }, 500);
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    clearTimeout(this.timeout);
    this.elementRef.nativeElement.style.backgroundColor = ''; 
  }
}