import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
  sub!: Subscription;
  survey: any = {};

  constructor(
    public _formBuilder: FormBuilder,
    public restDataSource: RestDataSource,
    private route: ActivatedRoute
  ) {}

  //// TODO:
  // Currently we can get data inputted from the in the console
  // Find a way to accept data and post to Database
  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      let sub = this.restDataSource
        .GetSurveyToEdit(this.route.snapshot.params['id'])
        .toPromise()
        .then((res) => {
          this.survey = res;
          console.log(this.survey);
          this.firstFormGroup = this._formBuilder.group({
            title: [this.survey.title, Validators.required],
            description: [this.survey.description, Validators.required],
            avatar: [this.survey.avatar, Validators.required],
          });
          this.secondFormGroup = this._formBuilder.group({
            question1: [this.survey.question[0].question1, Validators.required],
            answer1: [this.survey.question[0].answer1, Validators.required],
            answer2: [this.survey.question[0].answer2, Validators.required],
            answer3: [this.survey.question[0].answer3, Validators.required],
            answer4: [this.survey.question[0].answer4, Validators.required],
          });
          this.thirdFormGroup = this._formBuilder.group({
            question2: [this.survey.question[1].question2, Validators.required],
            answer1: [this.survey.question[1].answer1, Validators.required],
            answer2: [this.survey.question[1].answer2, Validators.required],
            answer3: [this.survey.question[1].answer3, Validators.required],
            answer4: [this.survey.question[1].answer4, Validators.required],
          });
          this.fourthFormGroup = this._formBuilder.group({
            question3: [this.survey.question[2].question3, Validators.required],
            answer1: [this.survey.question[2].answer1, Validators.required],
            answer2: [this.survey.question[2].answer2, Validators.required],
            answer3: [this.survey.question[2].answer3, Validators.required],
            answer4: [this.survey.question[2].answer4, Validators.required],
          });
          this.fithFormGroup = this._formBuilder.group({
            question4: [this.survey.question[3].question4, Validators.required],
            answer1: [this.survey.question[3].answer1, Validators.required],
            answer2: [this.survey.question[3].answer2, Validators.required],
            answer3: [this.survey.question[3].answer3, Validators.required],
            answer4: [this.survey.question[3].answer4, Validators.required],
          });
        });
    }

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
