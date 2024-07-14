import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
todayDate:number=Date.now();
inputText:string='';
firstName:string='';
a:number=0.567;
b:number=3.567;
showInitialsFlag:boolean=false
text:string=
"AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology."

showInitials() {
  this.showInitialsFlag = true;
}
}
