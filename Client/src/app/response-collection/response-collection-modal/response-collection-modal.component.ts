import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { Survey } from 'src/app/model/survey.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    question: [
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
  constructor(
    public _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ResponseCollectionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Survey
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
