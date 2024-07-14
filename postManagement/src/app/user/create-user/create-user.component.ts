import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{
  registerForm!:FormGroup
  constructor(private auth:AuthService, private router:Router){}
  
  ngOnInit(): void {
    this.registerForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)]),
      details:new FormControl('https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wiktionary.org%2Fwiki%2Fcat&psig=AOvVaw1DuVVkqHihcd8D1lDnjSh5&ust=1720500692326000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLiLyeXSlocDFQAAAAAdAAAAABAE',Validators.required)
    })
  }
  onsignup(){
   
    if (this.registerForm.valid) {
      const name = this.registerForm.get('name')?.value;
     const email = this.registerForm.get('email')?.value;
     const password = this.registerForm.get('password')?.value;
     const details = this.registerForm.get('details')?.value;
     this.auth.register(name,email, password,details).subscribe((response: any) => {
       if (response) {
        console.log(response)
         console.log('User registered successfully!');
        this.router.navigate(['header/user']);
       }
     });
   }
   else {
     console.error('Form is invalid');
   }
  }
}