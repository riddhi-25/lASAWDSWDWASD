import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient:HttpClient) { 
    console.log("data service connected")
  }
  getPosts(){
   return this.httpClient.get('https://jsonplaceholder.typicode.com/todos').pipe(map((res:any)=>res));
  }
}
