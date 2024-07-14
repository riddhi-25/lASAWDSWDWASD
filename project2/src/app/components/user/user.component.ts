import { Component,Input,OnChanges, SimpleChanges, ElementRef} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges{
@Input() myTitle!:string;
@Input() status!:boolean;
@Input() selectedUserId!:string;
@Input() myInput!:string;
highlightedTitle: string = '';

constructor(private elementRef: ElementRef) { }


ngOnChanges(changes: SimpleChanges): void {
  if (this.myInput!='' && this.myTitle.includes(this.myInput)) {

    this.highlightedTitle = this.myTitle.replace(this.myInput, `<span class="highlight">${this.myInput}</span>`);
  } else {
    this.highlightedTitle = this.myTitle;
  }
}

statusCheck(){
 if(!this.status){
  this.status=!this.status;
 }

}
}



