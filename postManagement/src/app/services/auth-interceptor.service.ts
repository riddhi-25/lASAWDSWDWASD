import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class authInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modifiedReq = req.clone({
            headers: req.headers.append('name', 'riddhi')
        });
        console.log("authI called");
        
        return next.handle(modifiedReq).pipe(tap((event)=>{
            if(event.type===HttpEventType.Response){
                console.log("response arrived");
                console.log(event.body)
            }
        }));
    }
}