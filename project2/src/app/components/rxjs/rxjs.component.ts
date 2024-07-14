import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {
data:any[]=[];


observable1=new Observable((observer)=>{
setTimeout(()=>{observer.next(1)},1000) ;
setTimeout(()=>{observer.next(2)},2000) ;
// setTimeout(()=>{observer.error(new Error('something went wrong'))},3000) ;
setTimeout(()=>{observer.next(3)},4000) ;
setTimeout(()=>{observer.complete()},5000) ;
});  
    
getData(){
  const subscription =this.observable1.subscribe({
    next:(value:any)=>{
      this.data.push(value);
    },
    error(err){
      alert(err.message);
    },
    complete(){
      alert('completed');
      subscription.unsubscribe();
    }
  }); 
};





}
