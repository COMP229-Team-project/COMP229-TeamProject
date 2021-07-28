import { NgModule } from '@angular/core';
import { AuthGuard } from './email-password-auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { EmailPasswordAuthComponent } from './email-password-auth/email-password-auth.component';
import { UserRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [SharedModule, UserRoutingModule],
  providers: [AuthGuard],
  declarations: [EmailPasswordAuthComponent],
})
export class AdminModule {}
