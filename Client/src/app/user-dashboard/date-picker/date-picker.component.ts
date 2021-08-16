import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  @Input() dateRange = {
    id: String,
    startDate: Date,
    endDate: Date,
  };

  firstFormGroup!: FormGroup;

  constructor(public fb: FormBuilder, private restDataSource: RestDataSource) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      startDate: [this.dateRange.startDate],
      endDate: [this.dateRange.endDate],
    });
  }

  UpdateActiveDateRange(): void {
    let updateData = {
      id: this.dateRange.id,
      startDate: this.firstFormGroup.value.startDate,
      endDate: this.firstFormGroup.value.endDate,
    };
    this.restDataSource.UpdateActiveDateRange(updateData);
  }
}
