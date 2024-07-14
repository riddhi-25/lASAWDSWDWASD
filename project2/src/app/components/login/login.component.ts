import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status: boolean = false;
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

  OnLoginClicked() {

    this.authService.login(this.email, this.password).subscribe((response: any) => {
      if (response.token) {
        localStorage.setItem('token', response.token);
       
          this.router.navigate(['/Welcome']);
        
      }
    },
      (error: any) => {
        console.error(error);
        this.status = !this.status;
      }
    );
  }
}
