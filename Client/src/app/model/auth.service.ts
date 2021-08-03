import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../model/user.model';

//service will handle all of our
@Injectable()
export class AuthService {
  user: User;

  constructor(private restDataSource: RestDataSource) {
    this.user = new User();
  }

  register(user: User): Observable<any> {
    return this.restDataSource.register(user);
  }

  authenticate(user: User): Observable<any> {
    return this.restDataSource.authenticate(user);
  }

  storeUserData(token: any, user: User): void {
    this.restDataSource.storeUserData(token, user);
  }

  get authenticated(): boolean {
    return this.restDataSource.loggedIn();
  }

  logout(): Observable<any> {
    return this.restDataSource.logout();
  }
}
