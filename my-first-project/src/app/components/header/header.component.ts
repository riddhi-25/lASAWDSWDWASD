import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
  title:string = 'Task';
  name:string="riddhi";
  toggleAddTask(){
    console.log("toggle")
  }
  c1="red";
  cName="riddhi";
}