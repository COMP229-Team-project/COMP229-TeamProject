import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RestDataSource } from './rest.datasource';

//this is a feature module that will allow us to provide data to our application.
//by including this module in the app module we can provide all components in that module with our REST datasoruce methods
@NgModule({
  imports: [HttpClientModule],
  providers: [RestDataSource],
})
export class SurveyModule {}
