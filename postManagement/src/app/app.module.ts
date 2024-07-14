import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { authInterceptorService } from './services/auth-interceptor.service';
import { loginInterceptorService } from './services/loginInterceptor.service';
import { ErrorInterceptor } from './services/error.interceptor';
import { ErrorHandlerService } from './services/error-handler.service';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
  { provide: ErrorHandler, useClass: ErrorHandlerService },
  { provide: HTTP_INTERCEPTORS, useClass: authInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: loginInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  // {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true }
  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
