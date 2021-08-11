import { Component, Input } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';

@Component({
  selector: 'survey-preview',
  templateUrl: './survey-preview.component.html',
  styleUrls: ['./survey-preview.component.css'],
})
export class SurveyPreviewComponent {
  //input to accept survey objects from a service
  @Input() survey: Survey = {
    title: '',
    description: '',
    avatar: '',
    questions: [
      { question1: '', answer1: '', answer2: '', answer3: '', answer4: '' },
      { question2: '', answer1: '', answer2: '', answer3: '', answer4: '' },
      { question3: '', answer1: '', answer2: '', answer3: '', answer4: '' },
      { question4: '', answer1: '', answer2: '', answer3: '', answer4: '' },
    ],
    startDate: null,
    endDate: null,
    _id: '',
  };

  //dependency injections for our data source and router
  constructor() {}
}
