import { Component, Inject, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'report-button-dialog',
  template: `<button mat-raised-button color="accent" (click)="openDialog()">
    Send Report
  </button>`,
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}
  @Input()
  msg: String | undefined;

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent, {
      data: this.msg,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialogue.component.html',
  styleUrls: ['./dialogue.component.css'],
})
export class DialogContent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
