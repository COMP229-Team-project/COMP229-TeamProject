import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { RestDataSource } from './rest.datasource';
//connects to the data model and source in order for us to inject data into other components

@Injectable()
export class SurveyRepository {
  //
  private surveys: Survey[] = [];

  //inject the data from the data source via the constructor so we have access to the methods and props
  constructor(private dataSource: RestDataSource) {
    //getGoldCoins is an observable uses the observer pattern
    //when we subscribe to it all subscribers are notified when a change is made to the goldCoins array
    dataSource.getSurveys().subscribe((data) => {
      this.surveys = data;
    });
  }

  getSurveys(): Survey[] {
    return this.surveys;
  }

  //TODO: GET SPECIFIC SURVEY. IN PROGRESS!
  //let undefined be return type to supress error
  // getGoldCoin(id: number): Survey | undefined {
  //   return this.surveys.find((b) => b.id === id);
  // }
}
