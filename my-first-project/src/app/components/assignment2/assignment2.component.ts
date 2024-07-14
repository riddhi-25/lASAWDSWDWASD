import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
@Input() myNumber!:number;
@Output() newItemEvent = new EventEmitter<number>();

increment(){
this.myNumber++;
this.newItemEvent.emit(this.myNumber); 
 }
 decrement(){
  this.myNumber--;
  this.newItemEvent.emit(this.myNumber);
 }
}
