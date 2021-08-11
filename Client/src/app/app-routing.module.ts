import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './gaurds/auth.guard';
//app routing module defines routes for the application
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'survey', component: SurveyComponent, canActivate: [AuthGuard] },
  { path: 'survey/:id', component: SurveyComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  // providers: [HomeFirstGuard],
})
export class AppRoutingModule {}
