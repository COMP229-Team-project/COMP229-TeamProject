import { Component, Input, OnInit } from '@angular/core';

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
  };

  constructor() {}

  ngOnInit(): void {}
}
