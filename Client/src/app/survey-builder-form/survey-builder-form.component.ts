import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Question1,
  Question2,
  Question3,
  Question4,
} from '../model/question.model';
import { RestDataSource } from '../model/rest.datasource';
import { Survey } from '../model/survey.model';

@Component({
  selector: 'survey-builder-form',
  templateUrl: 'survey-builder-form.component.html',
  styleUrls: ['survey-builder-form.component.css'],
})
export class SurveyBuilderFormComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fithFormGroup!: FormGroup;

  constructor(
    public _formBuilder: FormBuilder,
    public restDataSource: RestDataSource
  ) {}

  //// TODO:
  // Currently we can get data inputted from the in the console
  // Find a way to accept data and post to Database
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      avatar: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      question1: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      question2: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      question3: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
    });
    this.fithFormGroup = this._formBuilder.group({
      question4: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
    });
  }

  createSurvey(): void {
    let question1 = new Question1(
      this.secondFormGroup.value.question1,
      this.secondFormGroup.value.answer1,
      this.secondFormGroup.value.answer2,
      this.secondFormGroup.value.answer3,
      this.secondFormGroup.value.answer4
    );
    let question2 = new Question2(
      this.thirdFormGroup.value.question2,
      this.thirdFormGroup.value.answer1,
      this.thirdFormGroup.value.answer2,
      this.thirdFormGroup.value.answer3,
      this.thirdFormGroup.value.answer4
    );
    let question3 = new Question3(
      this.fourthFormGroup.value.question3,
      this.fourthFormGroup.value.answer1,
      this.fourthFormGroup.value.answer2,
      this.fourthFormGroup.value.answer3,
      this.fourthFormGroup.value.answer4
    );
    let question4 = new Question4(
      this.fithFormGroup.value.question4,
      this.fithFormGroup.value.answer1,
      this.fithFormGroup.value.answer2,
      this.fithFormGroup.value.answer3,
      this.fithFormGroup.value.answer4
    );

    let survey = new Survey(
      this.firstFormGroup.value.title,
      this.firstFormGroup.value.description,
      this.firstFormGroup.value.avatar,
      [question1, question2, question3, question4],
      'placeholder'
    );

    if (!survey.avatar) {
      survey.avatar =
        'https://linustechtips.com/uploads/profile/photo-59449.png';
    }

    console.log({
      title: survey.title,
      description: survey.description,
      avatar: survey.avatar,
      questions: survey.question,
    });

    this.restDataSource.postNewSurvey(survey);
  }
}
