import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertifyService: AlertifyService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  public get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  public get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit(): void {
    const token = this.userService.findUser(
      this.email.value,
      this.password.value
    );
    if (token) {
      this.alertifyService.success('Your are loged in Successfully!!');
      localStorage.setItem('token', token.userName);
      this.route.navigate(['/']);
    } else {
      this.alertifyService.error('Email or password incorrect!!');
    }
  }
}
