import { Directive, ElementRef,ViewContainerRef,TemplateRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective implements OnInit {
@Input('appHide') 
delay=0;

  constructor(
    private viewContainerRef:ViewContainerRef,
    private template:TemplateRef<any>
  ) { }
  
ngOnInit(): void {
  this.viewContainerRef.createEmbeddedView(this.template)
  setTimeout(()=>{
    this.viewContainerRef.clear();
    }, this.delay)

}
}
