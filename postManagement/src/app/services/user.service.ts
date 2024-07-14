import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface User{
  avatar: string;
  createdAt: string;
  email: string;
  id: number;
  name: string;
  password: string;
  role: string;
  updatedAt: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getUsers() {
    return this.httpClient.get('https://api.escuelajs.co/api/v1/users/');
  }

  getUserById(userId: number) {
    return this.httpClient.get(`https://api.escuelajs.co/api/v1/users/${userId}`).pipe(map((res:any)=> res));
  }
  
  editUser(userId:number, userData: User){
    console.log(userId)
    console.log(userData)
   return this.httpClient.put(`https://api.escuelajs.co/api/v1/users/${userId}`, userData).pipe(map((res:any)=> res));
  
  }
}