import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EditableSurvey, Survey } from './survey.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { surveyResponse } from './response.model';
import { User } from './user.model';

@Injectable()
export class RestDataSource implements OnInit {
  user!: User | null;
  authToken!: any;
  baseURL: String = 'https://quizhive.azurewebsites.net/';

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
  ) {}

  ngOnInit() {
    this.user = new User();
  }

  //get an observable array of surveys from our api
  getSurveys(): Observable<Survey[]> {
    //PRODUCTION
    return this.http.get<Survey[]>('/api');
    //LOCAL
    // return this.http.get<Survey[]>(this.baseURL + '/api');
  }

  getUserSurveys(): Observable<Survey[]> {
    this.loadToken();
    let creatorId = JSON.parse(localStorage.getItem('user')!).id;
    //PRODUCTION
    return this.http.post<Survey[]>(
      '/api/usersurveys',
      { creatorId: creatorId },
      this.httpOptions
    );

    //LOCAL
    // return this.http.post<Survey[]>(
    //   this.baseURL + '/api/usersurveys',
    //   { creatorId: creatorId },
    //   this.httpOptions
    // );
  }

  //post a survey to the api for processing
  postNewSurvey(survey: Survey): void {
    this.loadToken();
    survey.creatorId = JSON.parse(localStorage.getItem('user')!).id;

    //PRODUCTION
    this.http
      .post('/api/add', survey, this.httpOptions)
      .toPromise()
      .then((response) => {
        this.router.navigate(['home']);
      });

    //LOCAL
    // this.http
    //   .post(this.baseURL + '/api/add', survey, this.httpOptions)
    //   .toPromise()
    //   .then((response) => {
    //     this.router.navigate(['home']);
    //   });
  }

  //delete a specific survey from the database via the api
  DeleteSurvey(id: string): void {
    this.loadToken();
    //PRODUCTION
    this.http
      .delete('/api/delete/' + id, this.httpOptions)
      .toPromise()
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });

    //LOCAL
    // this.http
    //   .delete(this.baseURL + '/api/delete/' + id, this.httpOptions)
    //   .toPromise()
    //   .then((response) => {
    //     location.reload();
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  //get a specific survey from the database
  GetSurveyToEdit(id: string): Observable<any> {
    this.loadToken();
    //PRODUCTION
    return this.http.get('/api/edit/' + id, this.httpOptions);
    //LOCAL
    // return this.http.get(this.baseURL + '/api/edit/' + id, this.httpOptions);
  }

  //update the values of a spcific survey
  EditSurvey(id: string, survey: EditableSurvey): void {
    this.loadToken();
    //PRODUCTION
    this.http
      .post('/api/edit/' + id, survey, this.httpOptions)
      .toPromise()
      .then((response) => {
        this.router.navigate(['home']);
      });

    //LOCAL
    // this.http
    //   .post(this.baseURL + '/api/edit/' + id, survey, this.httpOptions)
    //   .toPromise()
    //   .then((response) => {
    //     this.router.navigate(['home']);
    //   });
  }

  AddResponse(response: surveyResponse): void {
    //PRODUCTION
    this.http
      .post('/api/responses', response)
      .toPromise()
      .then((response) => {
        this.router.navigate(['home']);
      });

    //LOCAL
    // this.http
    //   .post(this.baseURL + '/api/responses', response)
    //   .toPromise()
    //   .then((response) => {
    //     this.router.navigate(['home']);
    //   });
  }

  UpdateActiveDateRange(dateRange: any): void {
    this.loadToken();
    //PRODUCTION
    this.http
      .post('/api/updatedaterange', dateRange, this.httpOptions)
      .toPromise()
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });

    //LOCAL
    // this.http
    //   .post(this.baseURL + '/api/updatedaterange', dateRange, this.httpOptions)
    //   .toPromise()
    //   .then((response) => {
    //     location.reload();
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  EmailSurveyDataToUser(survey: Survey): Observable<any> {
    this.loadToken();
    let data = { survey: survey, user: this.user };

    //PRODUCTION
    return this.http.post('/api/emailsurveydatatouser', data, this.httpOptions);

    //LOCAL
    // return this.http.post(
    //   this.baseURL + '/api/emailsurveydatatouser',
    //   data,
    //   this.httpOptions
    // );
  }

  //////////////////////////////////////////////////////////////////////////

  UpdateUserProfile(updatedProfile: any): void {
    this.loadToken();
    //PRODUCTION
    this.http
      .post('/api/updateuserprofile', updatedProfile, this.httpOptions)
      .toPromise()
      .then((response) => {
        let creatorId = JSON.parse(localStorage.getItem('user')!).id;
        updatedProfile.id = creatorId;
        localStorage.setItem('user', JSON.stringify(updatedProfile));
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });

    //LOCAL
    // this.http
    //   .post(
    //     this.baseURL + '/api/updateuserprofile',
    //     updatedProfile,
    //     this.httpOptions
    //   )
    //   .toPromise()
    //   .then((response) => {
    //     let creatorId = JSON.parse(localStorage.getItem('user')!).id;
    //     updatedProfile.id = creatorId;
    //     localStorage.setItem('user', JSON.stringify(updatedProfile));
    //     location.reload();
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  //authenticate a usre by posting to the API's login route with a user object and the headers set to httpOptions
  register(user: User): Observable<any> {
    //PRODUCTION
    return this.http.post<any>('/api/register', user, this.httpOptions);
    //LOCAL
    // return this.http.post<any>(
    //   this.baseURL + '/api/register',
    //   user,
    //   this.httpOptions
    // );
  }

  authenticate(user: User): Observable<any> {
    //PRODUCTION
    return this.http.post<any>('/api/login', user, this.httpOptions);
    //LOCAL
    // return this.http.post<any>(
    //   this.baseURL + '/api/login',
    //   user,
    //   this.httpOptions
    // );
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
    //PRODUCTION
    return this.http.get<any>('/api/logout', this.httpOptions);
    //LOCAL
    // return this.http.get<any>(this.baseURL + '/api/logout', this.httpOptions);
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
