import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {
    // this.registrationForm = new FormGroup(
    //   {
    //     userName: new FormControl(null, Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl(null, [
    //       Validators.required,
    //       Validators.minLength(8),
    //     ]),
    //     confirmPassword: new FormControl(null, Validators.required),
    //     mobile: new FormControl(null, [
    //       Validators.required,
    //       Validators.maxLength(8),
    //     ]),
    //   },
    //   this.passwordMatichingValidator
    // );
    this.createRegisterForm();
  }

  createRegisterForm(): void {
    this.registrationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
      { validators: this.passwordMatichingValidator }
    );
  }

  passwordMatichingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value
      ? null
      : { notmatched: true };
  }
  // Form Getters
  public get userName(): FormControl {
    return this.registrationForm.get('userName') as FormControl;
  }
  public get email(): FormControl {
    return this.registrationForm.get('email') as FormControl;
  }
  public get password(): FormControl {
    return this.registrationForm.get('password') as FormControl;
  }
  public get confirmPassword(): FormControl {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  public get mobile(): FormControl {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit(): void {
    console.log(this.registrationForm);
    this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    } as User;
    this.userService.addUser(this.user);
    this.registrationForm.reset();
    this.alertifyService.success('You are successfully registerd!!');
  }
}
