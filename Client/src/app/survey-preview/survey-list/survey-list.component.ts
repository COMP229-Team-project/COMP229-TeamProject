import { Component, Input, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
})
export class SurveyListComponent implements OnInit {
  surveys: Observable<Survey[]>;
  isSmall: Observable<boolean> = this.breakPointObserver
    .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  cols!: number;

  //get surveys from service by injecting service into constructor
  constructor(
    public restDataSource: RestDataSource,
    public breakPointObserver: BreakpointObserver
  ) {
    this.surveys = restDataSource.getSurveys();
  }

  //initialize posts property with the data from RestDataSource
  ngOnInit(): void {
    this.surveys = this.restDataSource.getSurveys();
  }
}
