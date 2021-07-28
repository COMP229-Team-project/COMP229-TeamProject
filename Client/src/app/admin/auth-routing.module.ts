import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailPasswordAuthComponent } from './email-password-auth/email-password-auth.component';

const routes: Routes = [{ path: '', component: EmailPasswordAuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
