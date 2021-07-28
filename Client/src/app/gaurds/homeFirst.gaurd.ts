import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

@Injectable()
export class HomeFirstGuard {
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component !== HomeComponent) {
        this.router.navigateByUrl('/home');
        return false;
      }
    }
    return true;
  }
}
