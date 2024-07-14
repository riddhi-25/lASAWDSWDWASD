import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    authReq = this.addTokenHeader(request, localStorage.getItem('token'))
    return next.handle(authReq).pipe(
      catchError(errordata => {
        if (errordata.status === 401) {
          //refresh token
          return this.handleRefreshToken(request, next)
        }
        return throwError(errordata)
      })
    );
  }

  addTokenHeader(request: HttpRequest<any>, token: any) {
    return request.clone({
      setHeaders:{
        Authorization: `bearer ${token}`
      }
    })
  }

  handleRefreshToken(request: HttpRequest<any>, next: HttpHandler) {
    return of(this.authService.getRefreshToken()).pipe(
      switchMap(refreshToken => {
        if (refreshToken) {
          localStorage.setItem('newtoken', refreshToken);
          let authReq = request;
          authReq = this.addTokenHeader(request, refreshToken);
          return next.handle(authReq);
        } else {
        
          return throwError('Failed to refresh token');
        }
      })
    )
  }
}