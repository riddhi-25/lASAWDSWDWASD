import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';
import { Assignment2Component } from './components/assignment2/assignment2.component';
import { LongPressDirective } from './long-press.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    AssignmentComponent,
    ChildComponent,
    Assignment2Component,
    LongPressDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
