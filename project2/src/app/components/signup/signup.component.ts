import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { comparePassword, patternValidator } from './customValidator';
import { AuthServiceService } from 'src/app/services/auth.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  reactiveForm!: FormGroup
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      patternValidator(/\d/, { hasNumber: true }),
      patternValidator(/[A-Z]/, { hasUpperCase: true }),
      patternValidator(/[a-z]/, { hasLowerCase: true }),

      ]),

      confirmPassword: new FormControl('', [Validators.required,

      ])
    },
      {
        validators: comparePassword
      }
    )
  }


  OnSubmitClicked() {
    if (this.reactiveForm.valid) {
      const email = this.reactiveForm.get('email')?.value;
      const password = this.reactiveForm.get('password')?.value;

      this.authService.signup(email, password).subscribe((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          console.log('User registered successfully!');
          this.router.navigate(['/Welcome']);
        } else {
          console.error('Error registering user:', response.error);
        }
      });
    }
    else {
      console.error('Form is invalid');
    }
  }

}
