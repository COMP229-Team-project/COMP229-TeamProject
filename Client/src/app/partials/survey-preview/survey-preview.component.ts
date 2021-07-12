import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'survey-preview',
  templateUrl: './survey-preview.component.html',
  styleUrls: ['./survey-preview.component.css'],
})
export class SurveyPreviewComponent implements OnInit {
  //input to accept post objects from a service
  @Input() post = {
    title: '',
    description: '',
    imgURL: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
