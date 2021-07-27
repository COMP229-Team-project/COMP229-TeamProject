import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditableSurvey, Survey } from './survey.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { surveyResponse } from './response.model';

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

  //initialze service with the required objects and baseurl to perform routing and requests
  constructor(private http: HttpClient, private router: Router) {
    this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  //get an observable array of surveys from our api
  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.baseURL + 'api');
  }

  //post a survey to the api for processing
  postNewSurvey(survey: Survey): void {
    this.http
      .post(this.baseURL + 'api/add', survey)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.router.navigate(['home']);
      });
  }

  //delete a specific survey from the database via the api
  DeleteSurvey(id: string): void {
    this.http
      .delete(this.baseURL + 'api' + '/delete/' + id)
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
    return this.http.get(this.baseURL + 'api/edit/' + id);
  }

  //update the values of a spcific survey
  EditSurvey(id: string, survey: EditableSurvey): void {
    this.http
      .post(this.baseURL + 'api/edit/' + id, survey)
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
    this.http
      .post(this.baseURL + 'api/updatedaterange', dateRange)
      .toPromise()
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
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
