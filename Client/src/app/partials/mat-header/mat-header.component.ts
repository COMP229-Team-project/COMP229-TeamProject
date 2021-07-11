import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mat-header',
  templateUrl: './mat-header.component.html',
  styleUrls: [
    './mat-header.component.css',
    '../../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css',
  ],
})
export class MatHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
