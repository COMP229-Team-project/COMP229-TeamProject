import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { Survey } from 'src/app/model/survey.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { surveyResponse } from 'src/app/model/response.model';

@Component({
  selector: 'response-collection-modal-button',
  template:
    '<button mat-stroked-button color="primary" (click)="openDialog()">TAKE SURVEY</button>',
})
export class ResponseCollectionModalComponent {
  @Input() survey = {
    title: '',
    description: '',
    avatar: '',
    questions: [
      { question1: '', answer1: '', answer2: '', answer3: '', answer4: '' },
      { question2: '', answer1: '', answer2: '', answer3: '', answer4: '' },
      { question3: '', answer1: '', answer2: '', answer3: '', answer4: '' },
      { question4: '', answer1: '', answer2: '', answer3: '', answer4: '' },
    ],
    _id: '',
  };

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ResponseCollectionDialog, {
      data: this.survey,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './response-collection-modal-dialog.component.html',
  styleUrls: ['./response-collection-modal.component.css'],
})
export class ResponseCollectionDialog implements OnInit {
  responseForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    public restDataSource: RestDataSource,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ResponseCollectionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Survey
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  //initialize the form controls
  ngOnInit() {
    this.responseForm = this.fb.group({
      response1: ['', Validators.required],
      response2: ['', Validators.required],
      response3: ['', Validators.required],
      response4: ['', Validators.required],
    });
  }

  //use the data source to add the current responses to the associated survey object
  onSubmit() {
    //create a payload that sends the current survey ID and user responses to the API
    let responses: surveyResponse = {
      id: this.data._id,
      response1: this.responseForm.value.response1,
      response2: this.responseForm.value.response2,
      response3: this.responseForm.value.response3,
      response4: this.responseForm.value.response4,
    };
    this.restDataSource.AddResponse(responses);
    this.submitted = true;
  }
}
