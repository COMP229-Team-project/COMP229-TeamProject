import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'survey-preview',
  templateUrl: './survey-preview.component.html',
  styleUrls: [
    './survey-preview.component.css',
    '../../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css',
  ],
})
export class SurveyPreviewComponent implements OnInit {
  @Input() post = {
    title: '',
    description: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
