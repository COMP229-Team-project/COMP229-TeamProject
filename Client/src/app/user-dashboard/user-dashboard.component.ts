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

  surveys: Observable<Survey[]>;

  constructor(
    public restDataSource: RestDataSource,
    public authservice: AuthService,
    private router: Router
  ) {
    this.surveys = this.restDataSource.getUserSurveys();
  }

  ngOnInit(): void {
    this.surveys = this.restDataSource.getUserSurveys();
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
    console.log(survey);
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
  response1: [];
  response2: [];
  response3: [];
  response4: [];
}
