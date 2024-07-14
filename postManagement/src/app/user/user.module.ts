import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes:Routes=[
  {path:'',component:UserListComponent},
  {
    path:'addUser',component:CreateUserComponent
  },
  {path:'editUser/:id',component:EditUserComponent}
]

@NgModule({
  declarations: [
    UserListComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
