import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  form!: FormGroup;
  user!: User;
  isSmall$: Observable<boolean> = this.breakPointObserver
    .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private fb: FormBuilder,
    private restDataSource: RestDataSource,
    public breakPointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.form = this.fb.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  UpdateUserProfile() {
    let updatedProfile = {
      _id: this.restDataSource.user?.id,
      email: this.form.value.email,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
    };
    this.restDataSource.UpdateUserProfile(updatedProfile);
  }
}
