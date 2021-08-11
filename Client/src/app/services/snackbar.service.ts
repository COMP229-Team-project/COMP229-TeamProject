import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  authError() {
    this.snackBar.open('Please login first!', 'OK', {
      duration: 5000,
      verticalPosition: 'top',
    });

    return this.snackBar
      ._openedSnackBarRef!.onAction()
      .pipe(tap((_) => this.router.navigate(['/login'])))
      .subscribe();
  }
}
