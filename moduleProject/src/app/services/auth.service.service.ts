import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  isLogged: Boolean = false;


  login(email: string, password: string) {
    const payload = { email, password };
    return this.http.post('https://reqres.in/api/login', payload)
  }

  logout() {
    this.isLogged = false;
    localStorage.removeItem('token');
  }

  IsAuthenticated() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }
  
  signup(email: string, password: string){
    const body = { email, password };
    return this.http.post('https://reqres.in/api/register', body)
  }
}
