import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TodoComponent } from './components/todo/todo.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { RoutingModule } from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './components/pipes/pipes.component';
import { InitialsPipe } from './components/pipes/initials.pipe';
import { HighlightPipe } from './components/pipes/highlight.pipe';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { OperatorsComponent } from './components/rxjs/operators/operators.component';
import { SubjectComponent } from './components/rxjs/subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WelcomeComponent,
    TodoComponent,
    LoginComponent,
    NotFoundComponent,
    SignupComponent,
    PipesComponent,
    InitialsPipe,
    HighlightPipe,
    RxjsComponent,
    OperatorsComponent,
    SubjectComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
