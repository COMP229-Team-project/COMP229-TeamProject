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
  surveys: Observable<Survey[]>;

  //get surveys from service by injecting service into constructor
  constructor(public restDataSource: RestDataSource) {
    this.surveys = restDataSource.getSurveys();
  }

  //initialize posts property with the data from RestDataSource
  ngOnInit(): void {
    this.surveys = this.restDataSource.getSurveys();
  }
}
