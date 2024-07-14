import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from '../component/signup/signup.component';

const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent}
]
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
})
export class AuthModule { }
