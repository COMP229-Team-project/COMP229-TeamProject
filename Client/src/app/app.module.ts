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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

//import components to display active surveys
import { SurveyListComponent } from './partials/survey-list/survey-list.component';
import { SurveyPreviewComponent } from './partials/survey-preview/survey-preview.component';
import { MatFooterComponent } from './partials/mat-footer/mat-footer.component';

//import components for building survey builder
import { SurveyBuilderFormComponent } from './survey-builder-form/survey-builder-form.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

//import material components to impliment response collection modal
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import {
  ResponseCollectionModalComponent,
  ResponseCollectionDialog,
} from './response-collection/response-collection-modal/response-collection-modal.component';

//import the module that communicates with the backend
//GETS survey JSON data
import { SurveyModule } from './model/model.module';
import { MatNativeDateModule } from '@angular/material/core';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

//Module to build user dashboard
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DatePickerComponent } from './user-dashboard/date-picker/date-picker.component';
import { ShellComponent } from './shell/shell.component';
import { MatExpansionModule } from '@angular/material/expansion';

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
    ResponseCollectionModalComponent,
    ResponseCollectionDialog,
    UserDashboardComponent,
    DashboardComponent,
    DatePickerComponent,
    ShellComponent,
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
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
