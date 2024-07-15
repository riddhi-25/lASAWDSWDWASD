import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
loginForm!:FormGroup;
subscription!: Subscription;
constructor(private auth:AuthService,private router: Router){}

ngOnInit(): void {
  this.loginForm=new FormGroup({
    email:new FormControl('',[
      Validators.required, Validators.email
    ]),
    password:new FormControl('',[
      Validators.required
    ])
  })

}

OnSubmitClicked(){
  const email = this.loginForm.get('email')?.value;
  const password = this.loginForm.get('password')?.value;

  
  this.subscription =this.auth.login(email, password).subscribe((response: any) => {
    const { access_token, refresh_token } = response;
    localStorage.setItem('token', access_token);
    localStorage.setItem('refreshToken', refresh_token);

    this.router.navigate(['/header']);
  },
  //  (error: any) => {
  //   console.error(error);
  //   alert('invalid login')
  // }
);
}
ngOnDestroy(): void {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}
}
