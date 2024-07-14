import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from 'rc/app/services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: jasmine.createSpyObj('AuthService', ['login']) },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authServiceMock = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerMock = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a loginForm with email and password controls', () => {
    expect(component.loginForm.contains('email')).toBeTrue();
    expect(component.loginForm.contains('password')).toBeTrue();
  });

  it('should call login method on AuthService when OnSubmitClicked is called', () => {
    const email = 'test@example.com';
    const password = 'password';
    component.loginForm.get('email')?.setValue(email);
    component.loginForm.get('password')?.setValue(password);
    component.OnSubmitClicked();
    expect(authServiceMock.login).toHaveBeenCalledWith(email, password);
  });

  it('should navigate to /header when login is successful', () => {
    const email = 'test@example.com';
    const password = 'password';
    component.loginForm.get('email')?.setValue(email);
    component.loginForm.get('password')?.setValue(password);
    component.OnSubmitClicked();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/header']);
  });

  it('should display error message when email is invalid', () => {
    component.loginForm.get('email')?.setValue('invalid email');
    fixture.detectChanges();
    const errorMessage = fixture.nativeElement.querySelector('p');
    expect(errorMessage.textContent).toBe('Please enter a valid email.');
  });

  it('should display error message when password is required', () => {
    component.loginForm.get('password')?.setValue('');
    fixture.detectChanges();
    const errorMessage = fixture.nativeElement.querySelector('p');
    expect(errorMessage.textContent).toBe('Password is required.');
  });
});

https://www.youtube.com/watch?v=NsKBZuagLcg&ab_channel=AkhileshSrivastava