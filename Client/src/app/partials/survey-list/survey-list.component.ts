import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { Observable } from 'rxjs';

@Component({
  selector: 'survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
})
export class SurveyListComponent implements OnInit {
  //get surveys from service by injecting service into constructor
  surveys: Observable<Survey[]>;

  //initialize posts property with the data from PostListService
  constructor(public surveyList: RestDataSource) {
    this.surveys = surveyList.getSurveys();
  }

  ngOnInit(): void {
    this.surveys = this.surveyList.getSurveys();
  }
}
