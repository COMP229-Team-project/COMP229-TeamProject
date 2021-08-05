import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import components to display active surveys
import { SurveyListComponent } from './survey-preview/survey-list/survey-list.component';
import { SurveyPreviewComponent } from './survey-preview/survey-preview.component';

//import components for building survey builder
import { SurveyBuilderFormComponent } from './survey-builder-form/survey-builder-form.component';

import {
  ResponseCollectionModalComponent,
  ResponseCollectionDialog,
} from './response-collection/response-collection-modal/response-collection-modal.component';

//Module to build user dashboard
import { DatePickerComponent } from './user-dashboard/date-picker/date-picker.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SharedModule } from './shared/shared.module';
import { SurveyModule } from './model/model.module';
import { AuthService } from './model/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';
import { JwtModule } from '@auth0/angular-jwt';
import { httpInterceptorProviders } from './http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SurveyPreviewComponent,
    SurveyListComponent,
    SurveyBuilderFormComponent,
    ResponseCollectionModalComponent,
    ResponseCollectionDialog,
    DatePickerComponent,
    UserDashboardComponent,
    DashboardComponent,
    SurveyComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SurveyModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('id_token');
        },
        allowedDomains: ['quizhive.azurewebsites.net', 'localhost:3000'],
      },
    }),
  ],
  providers: [AuthService, MatSnackBar, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
