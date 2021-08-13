import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import angular material support
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const components = [ShellComponent];
const modules = [
  CommonModule,
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
  MatDialogModule,
  MatRadioModule,
  MatDatepickerModule,
  FormsModule,
  MatNativeDateModule,
  MatTableModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatProgressBarModule,
  RouterModule,
];
@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
