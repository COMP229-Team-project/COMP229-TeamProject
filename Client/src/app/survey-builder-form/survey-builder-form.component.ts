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
import { EditableSurvey, Survey } from '../model/survey.model';

@Component({
  selector: 'survey-builder-form',
  templateUrl: 'survey-builder-form.component.html',
  styleUrls: ['survey-builder-form.component.css'],
})
export class SurveyBuilderFormComponent implements OnInit {
  //Properties to store form data
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fithFormGroup!: FormGroup;
  sub!: Subscription;
  survey: any = {};

  //Injected dependencies
  constructor(
    public _formBuilder: FormBuilder,
    public restDataSource: RestDataSource,
    public route: ActivatedRoute
  ) {}

  //If there is an id param on the URL display the fields with data from a survey to be edited
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
            startDate: [this.survey.startDate, Validators.required],
            endDate: [this.survey.endDate, Validators.required],
          });
          this.secondFormGroup = this._formBuilder.group({
            question1: [
              this.survey.questions[0].question1,
              Validators.required,
            ],
            answer1: [this.survey.questions[0].answer1, Validators.required],
            answer2: [this.survey.questions[0].answer2, Validators.required],
            answer3: [this.survey.questions[0].answer3, Validators.required],
            answer4: [this.survey.questions[0].answer4, Validators.required],
          });
          this.thirdFormGroup = this._formBuilder.group({
            question2: [
              this.survey.questions[1].question2,
              Validators.required,
            ],
            answer1: [this.survey.questions[1].answer1, Validators.required],
            answer2: [this.survey.questions[1].answer2, Validators.required],
            answer3: [this.survey.questions[1].answer3, Validators.required],
            answer4: [this.survey.questions[1].answer4, Validators.required],
          });
          this.fourthFormGroup = this._formBuilder.group({
            question3: [
              this.survey.questions[2].question3,
              Validators.required,
            ],
            answer1: [this.survey.questions[2].answer1, Validators.required],
            answer2: [this.survey.questions[2].answer2, Validators.required],
            answer3: [this.survey.questions[2].answer3, Validators.required],
            answer4: [this.survey.questions[2].answer4, Validators.required],
          });
          this.fithFormGroup = this._formBuilder.group({
            question4: [
              this.survey.questions[3].question4,
              Validators.required,
            ],
            answer1: [this.survey.questions[3].answer1, Validators.required],
            answer2: [this.survey.questions[3].answer2, Validators.required],
            answer3: [this.survey.questions[3].answer3, Validators.required],
            answer4: [this.survey.questions[3].answer4, Validators.required],
          });
        });
    }

    //if there is no id param then display form without prefilled data
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      avatar: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
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

  //create a survey and post it to the API for processing
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
      this.firstFormGroup.value.startDate,
      this.firstFormGroup.value.endDate,
      'placeholder'
    );

    if (!survey.avatar) {
      survey.avatar =
        'https://linustechtips.com/uploads/profile/photo-59449.png';
    }
    console.log({
      startDate: this.firstFormGroup.value.startDate,
      DateObject: this.firstFormGroup.value.startDate instanceof Date,
    });

    this.restDataSource.postNewSurvey(survey);
  }

  //set new values for a survey that needs to be updated and post to API for processign.
  EditSurvey(): void {
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

    let survey = new EditableSurvey(
      this.firstFormGroup.value.title,
      this.firstFormGroup.value.description,
      this.firstFormGroup.value.avatar,
      [question1, question2, question3, question4],
      this.firstFormGroup.value.startDate,
      this.firstFormGroup.value.endDate
    );

    if (!survey.avatar) {
      survey.avatar =
        'https://linustechtips.com/uploads/profile/photo-59449.png';
    }

    this.restDataSource.EditSurvey(this.route.snapshot.params['id'], survey);
  }
}
