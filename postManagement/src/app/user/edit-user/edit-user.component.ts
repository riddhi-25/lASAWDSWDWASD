import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

interface User{
  avatar: string;
  createdAt: string;
  email: string;
  id: number;
  name: string;
  password: string;
  role: string;
  updatedAt: string;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  showForm:boolean=false;
  // userData:any=[]
  userForm!:FormGroup
  userId!:number
  user!:User
  editedUser!:User;
constructor(private activatedRoute:ActivatedRoute, private userService:UserService){}


viewForm(){
  this.showForm=true;

}

ngOnInit(): void {
  this.userId=this.activatedRoute.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe((data)=>{
      console.log(data)
      this.user=data
      this.editedUser={...data}
    })
  
}

editUser(user:User,userForm:NgForm){
  
  this.user=user;
  this.userService.editUser(this.user.id, userForm.value).subscribe((response) => {
    console.log(response);
    this.user=this.editedUser
  },
  );
  this.showForm = false;
  // this.router.navigate(['/header/user'])
}

}