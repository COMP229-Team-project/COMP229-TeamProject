import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Component({
  selector: 'survey-preview',
  templateUrl: './survey-preview.component.html',
  styleUrls: ['./survey-preview.component.css'],
})
export class SurveyPreviewComponent implements OnInit {
  //input to accept survey objects from a service
  @Input() survey = {
    title: '',
    description: '',
    avatar: '',
    _id: '',
  };

  //dependency injections for our data source and router
  constructor(public restDataSource: RestDataSource, private router: Router) {}

  ngOnInit(): void {}

  //function to delete a survey form the database
  DeleteSurvey(_id: string) {
    this.restDataSource.DeleteSurvey(_id);
  }

  //function to navigate to the survey builder page with a specific survey id
  RouteToSurvey(_id: string) {
    this.router.navigate(['survey/' + _id]);
  }
}
