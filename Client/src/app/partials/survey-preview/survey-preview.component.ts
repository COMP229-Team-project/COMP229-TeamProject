import { Component, Input, OnInit } from '@angular/core';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Component({
  selector: 'survey-preview',
  templateUrl: './survey-preview.component.html',
  styleUrls: ['./survey-preview.component.css'],
})
export class SurveyPreviewComponent implements OnInit {
  //input to accept post objects from a service
  @Input() survey = {
    title: '',
    description: '',
    avatar: '',
    _id: '',
  };

  constructor(public restDataSource: RestDataSource) {}

  ngOnInit(): void {}

  DeleteSurvey(_id: string) {
    this.restDataSource.DeleteSurvey(_id);
    console.log({ buttonWorks: true, id: _id });
  }
}
