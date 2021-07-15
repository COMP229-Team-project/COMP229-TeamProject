import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from './survey.model';

const PROTOCOL = 'http';
const PORT = '3000';

@Injectable()
export class RestDataSource {
  baseURL!: string;

  constructor(private http: HttpClient) {
    this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.baseURL + 'api');
  }
}
