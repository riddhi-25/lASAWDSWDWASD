import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  login(email: string, password: string) {
    const payload = { email, password };
    return this.httpClient.post('https://api.escuelajs.co/api/v1/auth/login', payload).pipe(
      tap((response: any) =>
         console.log("login api: "+response)),
      
    );
    ;
  }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  register(name:string,email: string, password: string, avatar:string){
    const body = {name, email, password, avatar };
    return this.httpClient.post('https://api.escuelajs.co/api/v1/users/', body)
  }

  userDetail(): Promise<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.get
    ('https://api.escuelajs.co/api/v1/auth/profile',
       { headers: headers }).toPromise();
  }

  getToken(){
    return localStorage.getItem('token');
  }
  getRefreshToken(){
    return localStorage.getItem('refreshToken')|| '';
  }
  
  // logout(): void {
  //   localStorage.removeItem('accessToken');
  // }
}