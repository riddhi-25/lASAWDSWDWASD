import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  showComponent = true;

  inputNum!:number;

  finalNum!:number;
  updateInputNum(value: number) {
    this.finalNum = value;
  }


private num:number=2300230;
isVisible=true;
setVisibility(){
  this.isVisible=!this.isVisible;
}
get counter(){
 return this.num;
 }
 set counter(value:number){
this.num=value;
 }
 increment(){
  this.counter++;
 }
 decrement(){
  this.counter--;
 }
 ngOnInit(): void {
  // console.log("parent onInit called")
}
ngDoCheck(): void {
  // console.log("parent docheck called")
}
handleLongPress() {
  console.log('Long press detected!');
}
}
