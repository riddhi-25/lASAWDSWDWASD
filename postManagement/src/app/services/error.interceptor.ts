import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse) => {
        console.log("error interceptor called",error)
        // if (error instanceof HttpErrorResponse) {
        //   if (error.error instanceof ErrorEvent) {
        //     console.log('error event')
        //   } else {
        //     switch (error.status) {
        //       case 401:
        //         console.log("error interceptor called "+error.statusText);
        //         break;
        //       case 403:
        //         console.log("error interceptor called "+error.statusText);
        //         break;
        //       case 404:
        //         console.log("error interceptor called "+error.statusText);
        //         break;
        //       case 503:
        //         console.log("error interceptor called "+error.statusText);
        //         break;
        //     }
        //   }
        // } else {
        //   console.log("error occured")
        // }
        return throwError(error);
        // return throwError(() => new Error(error.statusText))
      })
    );
  }
}
