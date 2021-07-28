import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-email-password-auth',
  templateUrl: './email-password-auth.component.html',
  styleUrls: ['./email-password-auth.component.css'],
})
export class EmailPasswordAuthComponent implements OnInit {
  form!: FormGroup;
  user!: User;

  type: 'login' | 'signup' | 'reset' = 'signup';
  loading = false;

  serverMessage?: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.user = new User();
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      passwordConfirm: ['', []],
    });
  }

  changeType(val: any) {
    this.type = val;
  }

  get isLogin() {
    return this.type === 'login';
  }

  get isSignup() {
    return this.type === 'signup';
  }

  get isPasswordReset() {
    return this.type === 'reset';
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordDoesMatch() {
    if (this.type !== 'signup') {
      return true;
    } else {
      return this.password?.value === this.passwordConfirm?.value;
    }
  }

  //register a user with an account
  register(form: FormGroup): void {
    if (form.valid) {
      this.user.email = this.form.value.email;
      this.user.firstName = this.form.value.firstName;
      this.user.lastName = this.form.value.lastName;
      this.user.password = this.form.value.password;
      // perform authenticati
      this.auth.register(this.user).subscribe((data) => {
        if (data.success) {
          this.router.navigateByUrl('dashboard');
        }
      });
    }
  }

  authenticate(form: FormGroup): void {
    console.log({ fromComponent: this.user });
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.auth.authenticate(this.user).subscribe((data) => {
      if (data.success) {
        this.router.navigateByUrl('dashboard');
      }
    });
  }

  async onSubmit() {
    this.loading = true;

    const email = this.email?.value;
    const password = this.password?.value;

    try {
      if (this.isLogin) {
        this.authenticate(this.form);
      }
      if (this.isSignup) {
        this.register(this.form);
      }
      if (this.isPasswordReset) {
        console.log('hello');
        this.serverMessage = 'Check your email';
      }
    } catch (err) {
      this.serverMessage = err;
    }

    this.loading = false;
  }
}
