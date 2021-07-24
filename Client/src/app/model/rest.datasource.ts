import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from './survey.model';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from './user.model';

const PROTOCOL = 'http';
const PORT = '3000';

@Injectable()
export class RestDataSource {
  baseURL!: string;
  authToken!: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  constructor(private http: HttpClient) {
    this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.baseURL + 'api');
  }

  postNewSurvey(survey: Survey): void {
    this.http
      .post(this.baseURL + 'api/add', survey)
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  authenticate(user: User): Observable<any>
  {
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  // private loadToken(): void {
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  //   this.httpOptions.headers = this.httpOptions.headers.set(
  //     'Authorization',
  //     this.authToken
  //   );
  // }
}
