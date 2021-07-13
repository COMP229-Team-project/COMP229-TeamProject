import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(public _formBuilder: FormBuilder) {}

  //// TODO:
  // Currently we can get data inputted from the in the console
  // Find a way to accept data and post to Database
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      avatarURL: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      question1: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      question1: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      question1: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
    });
    this.fithFormGroup = this._formBuilder.group({
      question1: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
    });

    //observables to log form data being inputted
    this.firstFormGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
    //observables to log form data being inputted
    this.secondFormGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
    //observables to log form data being inputted
    this.thirdFormGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
    //observables to log form data being inputted
    this.fourthFormGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
    //observables to log form data being inputted
    this.fithFormGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
