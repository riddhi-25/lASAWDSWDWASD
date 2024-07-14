import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private authService: AuthServiceService, private router: Router) { }

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get("logout"));
      if (logout) {
        this.authService.logout();
        alert("you are now logged out")
      }
    })
  }

  OnLoginClicked(loginForm:NgForm) {
console.log(loginForm)
    this.authService.login(this.email, this.password).subscribe((response: any) => {
      if (response.token) {
        localStorage.setItem('token', response.token);
       
          this.router.navigate(['/welcome']);
        
      }
    },
      (error: any) => {
        console.error(error);
        
      }
    );
  }
}
