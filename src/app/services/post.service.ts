import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public httpClient: HttpClient) { }
  getPosts() {
    return this.httpClient.get('https://api.escuelajs.co/api/v1/products/').pipe(map((res:any)=>res));
  }

  getPostById(postId: number) {
    return this.httpClient.get(`https://api.escuelajs.co/api/v1/products/${postId}`).pipe(map((res:any)=> res));
  }

  addPost(data: any) {
    console.log(data)
    return this.httpClient.post('https://api.escuelajs.co/api/v1/products/',data);
  }
  
  editPost(userId: number, postData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.put(`https://api.escuelajs.co/api/v1/products/${userId}`, postData, { headers });
  }
  
}