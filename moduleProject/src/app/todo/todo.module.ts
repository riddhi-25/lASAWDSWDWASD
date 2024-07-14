import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from '../component/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../component/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../guards/auth.guard';

const routes:Routes=[
  {path:'', component:TodoComponent,canActivate: [AuthGuard]}
]


@NgModule({
  declarations: [TodoComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
