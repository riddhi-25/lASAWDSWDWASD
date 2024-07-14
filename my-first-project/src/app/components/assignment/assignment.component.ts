import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})

export class AssignmentComponent implements OnInit, OnDestroy {
name:string="";
submitted:boolean=false;
onClick(){
this.submitted=true;
}


ngOnInit(){
  // console.log("quote initialised")
}

ngOnDestroy(){
  console.log("Quote Destroyed")
}
}
