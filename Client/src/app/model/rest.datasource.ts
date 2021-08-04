import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EditableSurvey, Survey } from './survey.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { surveyResponse } from './response.model';
import { User } from './user.model';

const PROTOCOL = 'http';
const PORT = '3000';
const REMOTE = 'https://quizhive.herokuapp.com/';

@Injectable()
export class RestDataSource implements OnInit {
  user!: User | null;
  baseURL!: string;
  authToken!: any;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  //initialze service with the required objects and baseurl to perform routing and requests
  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelperService: JwtHelperService
  ) {
    // this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    this.baseURL = `${REMOTE}`;
  }

  ngOnInit() {
    this.user = new User();
  }

  //get an observable array of surveys from our api
  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.baseURL + 'api');
  }

  getUserSurveys(): Observable<Survey[]> {
    this.loadToken();
    let creatorId = JSON.parse(localStorage.getItem('user')!).id;
    return this.http.post<Survey[]>(
      this.baseURL + 'api/usersurveys',
      { creatorId: creatorId },
      this.httpOptions
    );
  }

  //post a survey to the api for processing
  postNewSurvey(survey: Survey): void {
    this.loadToken();
    survey.creatorId = JSON.parse(localStorage.getItem('user')!).id;
    this.http
      .post(this.baseURL + 'api/add', survey, this.httpOptions)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.router.navigate(['home']);
      });
  }

  //delete a specific survey from the database via the api
  DeleteSurvey(id: string): void {
    this.loadToken();
    this.http
      .delete(this.baseURL + 'api' + '/delete/' + id, this.httpOptions)
      .toPromise()
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //get a specific survey from the database
  GetSurveyToEdit(id: string): Observable<any> {
    this.loadToken();
    return this.http.get(this.baseURL + 'api/edit/' + id, this.httpOptions);
  }

  //update the values of a spcific survey
  EditSurvey(id: string, survey: EditableSurvey): void {
    this.loadToken();
    this.http
      .post(this.baseURL + 'api/edit/' + id, survey, this.httpOptions)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.router.navigate(['home']);
      });
  }

  AddResponse(response: surveyResponse): void {
    this.http
      .post(this.baseURL + 'api/responses', response)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.router.navigate(['home']);
      });
  }

  UpdateActiveDateRange(dateRange: any): void {
    this.loadToken();
    this.http
      .post(this.baseURL + 'api/updatedaterange', dateRange, this.httpOptions)
      .toPromise()
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //////////////////////////////////////////////////////////////////////////

  //authenticate a usre by posting to the API's login route with a user object and the headers set to httpOptions
  register(user: User): Observable<any> {
    console.log({ restDataSource: user });
    return this.http.post<any>(
      this.baseURL + 'api/register',
      user,
      this.httpOptions
    );
  }

  authenticate(user: User): Observable<any> {
    return this.http.post<any>(
      this.baseURL + 'api/login',
      user,
      this.httpOptions
    );
  }

  //store user data within the properties of this service and in local storage
  storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  //remove the authentication token and user from both the service and local storage.
  //then send a logout request to the API
  logout(): Observable<any> {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.baseURL + 'api/logout', this.httpOptions);
  }

  //check if the user
  loggedIn(): boolean {
    return !this.jwtHelperService.isTokenExpired(this.authToken);
  }

  private loadToken(): void {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Authorization',
      this.authToken
    );
  }
}
