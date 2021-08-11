import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
})
export class ShellComponent implements OnInit {
  user!: User;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = new User();
  }

  isLoggedIn(): boolean {
    const result = this.auth.authenticated;
    if (result) {
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
    return result;
  }

  logout(): void {
    this.auth.logout().subscribe((data) => {
      this.router.navigate(['login']);
    });
  }
}
