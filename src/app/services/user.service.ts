import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getUsers() {
    return this.httpClient.get('https://api.escuelajs.co/api/v1/users/');
  }

  editUser(userId: number, userData: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
    });
    return this.httpClient.put(`https://api.escuelajs.co/api/v1/users/${userId}`, userData, { headers });
  
  }
}

