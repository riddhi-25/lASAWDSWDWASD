import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewChecked,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
@Input() myCounter!:number;

// name="";
ngOnInit(): void {
  console.log("child onInit called")
}
ngOnChanges(changes:SimpleChanges): void {
  console.log(changes)
  console.log("ngOnChanges called");
}
ngDoCheck(): void {
  console.log("child docheck called")
}
ngAfterContentInit(): void {
  console.log("child aftercontentinit")
}
ngAfterContentChecked(): void {
  console.log("aftercontentchecked")
}
ngAfterViewInit(): void {
  console.log("afterviewinit")
}
ngAfterViewChecked(): void {
  console.log("afterviewchecked")
}
ngOnDestroy(): void {
  console.log("ondestroy called")
}
}
