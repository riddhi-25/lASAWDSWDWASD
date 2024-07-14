import { Directive, ElementRef, QueryList, ContentChildren, AfterViewInit, HostListener } from '@angular/core';

@Directive({
  selector: '[trapFocus]'
})
export class FocusTrapDirective  {
  // @ContentChildren('focusTrap') focusableElementsQueryList!: QueryList<HTMLElement>;
  // private firstFocusableElement!: HTMLElement;
  // private lastFocusableElement!: HTMLElement;
  // constructor(private elementRef: ElementRef) { }
  // ngAfterViewInit() {
  //   // this.focusableElementsQueryList.changes.subscribe(() => {
  //   //   this.firstFocusableElement = this.focusableElementsQueryList.first;
  //   //   this.lastFocusableElement = this.focusableElementsQueryList.last;
  //   // });
  // }
  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    const isTabPressed = event.key === 'Tab';
    if (!isTabPressed) return;
  }
    // const activeElement = document.activeElement as HTMLElement;

    // if (event.shiftKey) {
    //   if (activeElement === this.firstFocusableElement) {
    //     event.preventDefault();
    //     this.lastFocusableElement.focus();
    //   }
    // } else {
    //   if (activeElement === this.lastFocusableElement) {
    //     event.preventDefault();
    //     this.firstFocusableElement.focus();
    //   }
    // }
  
  @HostListener('focus', ['$event'])
  onFocus(event: FocusEvent) {
    const target = event.target as HTMLElement;
     target.classList.add('trap-focus-highlight');
  }
  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent) {
    const target = event.target as HTMLElement;
    target.classList.remove('trap-focus-highlight');
  }
}








// import { Directive, ElementRef, AfterViewInit } from '@angular/core';

// @Directive({
//   selector: '[trapFocus]'
// })

// export class FocusTrapDirective implements AfterViewInit {
//   constructor(
//     private el: ElementRef
//     ) {}
  
//   ngAfterViewInit() {
//     this.trapFocus(this.el.nativeElement);
//   }

//   trapFocus(element:HTMLElement) {
//     element.addEventListener('keydown', function(e) {
//       const getActiveElement = () => {
//         if (document.activeElement?.shadowRoot) { return document.activeElement.shadowRoot.activeElement; }
//         else { return document.activeElement; }
//       };

//       const isTabPressed = e.keyCode === 9; // isTabPressed
//       if (!isTabPressed) return;
      
//       const focusableEls1 = element.querySelectorAll(
//         'a[href], button, textarea, input[type="text"],' +
//         'input[type="radio"], input[type="checkbox"], select'
//       );
//       const focusableEls = Array.from(focusableEls1).filter( (el: any) => !el.disabled);
//       const firstFocusableEl: any = focusableEls[0];  
//       const lastFocusableEl: any = focusableEls[focusableEls.length - 1];

//       if ( e.shiftKey ) /* shift + tab */ {
//         if (getActiveElement() === firstFocusableEl) {
//           lastFocusableEl.focus();
//           e.preventDefault();
//         }
//       } else /* tab */ {
//         if (getActiveElement() === lastFocusableEl) {
//           firstFocusableEl.focus();
//           e.preventDefault();
//         }
//       }
//     });
//     element.addEventListener('focus', (e: FocusEvent) => {
//       const target = e.target as HTMLElement;
//       target.classList.add('trap-focus-highlight');
//     });

//     element.addEventListener('blur', (e: FocusEvent) => {
//       const target = e.target as HTMLElement;
//       target.classList.remove('trap-focus-highlight');
//     });
//   }
// }