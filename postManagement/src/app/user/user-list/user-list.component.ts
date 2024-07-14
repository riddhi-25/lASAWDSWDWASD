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

}

