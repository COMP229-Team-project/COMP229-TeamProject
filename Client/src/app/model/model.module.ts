import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SurveyRepository } from './survey.repository';
import { RestDataSource } from './rest.datasource';

//this is a feature module that will allow us to provide data to our application.
@NgModule({
  imports: [HttpClientModule],
  providers: [SurveyRepository, RestDataSource],
})
export class SurveyModule {}
