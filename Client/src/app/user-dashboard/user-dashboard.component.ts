import { Component, OnInit } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { Survey } from '../model/survey.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'responses',
    'activates',
    'expires',
    'lifetime',
    'update',
    'delete',
    'report',
  ];

  surveys: Observable<Survey[]>;

  constructor(public restDataSource: RestDataSource, private router: Router) {
    this.surveys = this.restDataSource.getUserSurveys();
  }

  ngOnInit(): void {
    this.surveys = this.restDataSource.getUserSurveys();
  }

  //function to navigate to the survey builder page with a specific survey id
  RouteToSurvey(_id: string) {
    this.router.navigate(['survey/' + _id]);
  }

  //function to delete a survey form the database
  DeleteSurvey(_id: string) {
    this.restDataSource.DeleteSurvey(_id);
  }

  SendReport(survey: Survey) {
    console.log(survey);
    this.restDataSource.EmailSurveyDataToUser(survey);
  }
}
