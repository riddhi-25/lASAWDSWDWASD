import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerService implements ErrorHandler{
  constructor() { }
  handleError(error: any): void {
    console.error('Error caught by ErrorHandler:', error);
    
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.log('error event')
      } else {
        switch (error.status) {
          case 401:
            console.log("error handler called " + error.statusText);
            break;
          case 403:
            console.log("error handler called " + error.statusText);
            break;
          case 404:
            console.log("error handler called " + error.statusText);
            break;
          case 503:
            console.log("error handler called " + error.statusText);
            break;
        }
      }
    } else {
      console.log("error occured")
    }
    throwError(() => new Error(error.statusText));
    
  }
}
