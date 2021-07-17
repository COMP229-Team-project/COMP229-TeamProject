import { Component, OnInit } from '@angular/core';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { Survey } from 'src/app/model/survey.model';

@Component({
  selector: 'survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
})
export class SurveyListComponent implements OnInit {
  //get surveys from service by injecting service into constructor
  surveys: Survey[];

  //initialize posts property with the data from PostListService
  constructor(public surveyList: SurveyRepository) {
    this.surveys = surveyList.getSurveys();
  }

  ngOnInit(): void {}
}
