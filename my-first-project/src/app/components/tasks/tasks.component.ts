import { Component } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  message=""
  name=""
  tasks:Task[]=TASKS;
  myId="testID";
  isDisabled=true;
  sClass="text-success";
  hasError=true;
  isSpecial=true;
  messageClasses={
    "text-succes":!this.hasError,
    "text-danger":this.hasError
  }
  titleStyle={
    color:"rgb(15, 114, 114)" ,
    fontStyle:"Italic"
  }
  onClick(event:Event){
    console.log(event);
    this.message="clicked button"
    
  }
  logMessage(value:string){
console.log(value)
  }
}
