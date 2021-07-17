import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import angular material support
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatHeaderComponent } from './partials/mat-header/mat-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

//import components to display active surveys
import { SurveyListComponent } from './partials/survey-list/survey-list.component';
import { SurveyPreviewComponent } from './partials/survey-preview/survey-preview.component';
import { MatFooterComponent } from './partials/mat-footer/mat-footer.component';

//import components for building survey builder
import { SurveyBuilderFormComponent } from './survey-builder-form/survey-builder-form.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

//import the module that communicates with the backend
//GETS survey JSON data
import { SurveyModule } from './model/model.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SurveyComponent,
    SurveyPreviewComponent,
    SurveyListComponent,
    MatHeaderComponent,
    MatFooterComponent,
    SurveyBuilderFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    SurveyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
