import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData:any=[];

  constructor(private auth:AuthService, private router:Router){}
  
  ngOnInit(): void {
    this.userDetails()
  }
  
  userDetails(){
    this.auth.userDetail().then(response => {
      this.userData = response; // store response in userData
      localStorage.setItem('role', this.userData.role);
      console.log(this.userData)
    }).catch(error => {
      console.error(error);
    });
  }
  onLogout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
