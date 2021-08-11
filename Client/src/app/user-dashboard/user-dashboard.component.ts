import { Component, OnInit } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { Survey } from '../model/survey.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class UserDashboardComponent implements OnInit {
  serverMessage?: string;
  expandedSurvey!: Survey | null;
  noSurveys!: boolean;
  isSmall$: Observable<boolean> = this.breakPointObserver
    .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(map((result) => result.matches));

  displayedColumns: string[] = [
    'title',
    'responses',
    'activates',
    'expires',
    'lifetime',
    'details',
    'update',
    'delete',
    'report',
  ];

  displayedColumnsSmall: string[] = [
    'title',
    'lifetime',
    'details',
    'update',
    'delete',
    'report',
  ];

  surveys: Observable<Survey[]>;

  constructor(
    public restDataSource: RestDataSource,
    public authservice: AuthService,
    private router: Router,
    public breakPointObserver: BreakpointObserver
  ) {
    this.surveys = this.restDataSource.getUserSurveys();
  }

  ngOnInit(): void {
    this.surveys = this.restDataSource.getUserSurveys();
    this.AtLeastOneSurvey();
  }

  //Method monitors if there is at least 1 survey
  AtLeastOneSurvey() {
    this.surveys.subscribe((data) => {
      if (!data.length) {
        this.noSurveys = true;
      } else {
        this.noSurveys = false;
      }
    });
  }

  //function to navigate to the survey builder page with a specific survey id
  RouteToSurvey(_id: string) {
    this.router.navigate(['survey/' + _id]);
  }

  //function to delete a survey form the database
  DeleteSurvey(_id: string) {
    this.restDataSource.DeleteSurvey(_id);
  }

  SendReport(survey: Survey) {
    this.authservice.EmailSurveyDataToUser(survey).subscribe((data) => {
      if (data.success) {
        this.serverMessage = data.msg;
      } else {
        this.serverMessage = data.msg;
      }
    });
  }

  GetDetails(survey: Survey): ResponseFrequency {
    let responseFrequency: any = {
      response1: [0, 0, 0, 0],
      response2: [0, 0, 0, 0],
      response3: [0, 0, 0, 0],
      response4: [0, 0, 0, 0],
    };

    survey.responses.forEach((responseCollection: any) => {
      for (const response in responseCollection) {
        switch (responseCollection[response]) {
          case '1':
            responseFrequency[response][0] += 1;
            break;
          case '2':
            responseFrequency[response][1] += 1;
            break;
          case '3':
            responseFrequency[response][2] += 1;
            break;
          case '4':
            responseFrequency[response][3] += 1;
            break;
        }
      }
    });
    return responseFrequency;
  }
}

export interface ResponseFrequency {
  response1: [number, number, number, number];
  response2: [number, number, number, number];
  response3: [number, number, number, number];
  response4: [number, number, number, number];
}
