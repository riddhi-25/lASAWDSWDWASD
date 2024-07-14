import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getJokes(){
   return this.httpClient.get('https://icanhazdadjoke.com/', {
      headers:{
"Accept": "application/json"
      }
    }).pipe(map((res:any)=>res));
  }
  searchJokes(){
    return this.httpClient.get('https://icanhazdadjoke.com/search', {
      headers: {
        'Accept': "application/json"
      }
    }).pipe(map((res:any)=>res.results));
   }
  
}

