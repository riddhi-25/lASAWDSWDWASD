import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  showForm:boolean=false;
  userData:any=[]
  userForm!:FormGroup
  userId!:number
constructor(private userService:UserService,
  private activatedRoute:ActivatedRoute,
  private router:Router
){}


ngOnInit(): void {
  this.userService.getUsers().subscribe((response)=>{
    this.userData = response;
    console.log(this.userData);
  })
}
viewForm(userId: number){
  this.showForm=true;
  this.userId=userId
}

editUser(userId: number,userForm:NgForm){
  console.log(userForm.value)
  this.userId=userId;
  this.userService.editUser(this.userId, userForm.value).subscribe((response) => {
    console.log(response);

       
  }, (error) => {
    console.error(error);
        
  });
  this.showForm=false;
  this.router.navigate(['/header/user'])
}
}

