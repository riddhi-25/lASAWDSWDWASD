import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './post/list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecificPostComponent } from './specific-post/specific-post.component';

const routes:Routes=[
  {path:'',component:ListComponent}, 
  {path:'details/:id',component:SpecificPostComponent},
  {path:'add',component:CreatePostComponent}
]

@NgModule({
  declarations: [
    ListComponent,
  CreatePostComponent,
  SpecificPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PostModule { }