import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private _snackBar: MatSnackBar) {}
  //  snackbar functions
  openSnackbarNoDuration(title: string, action: string): void {
    this._snackBar.open(title, action);
  }

  openSnackbarDuration(title: string, action: string, duration: number) {
    this._snackBar.open(title, action, {
      duration,
    });
  }

  openSnackbar(title: string, action: string) {
    this.openSnackbarDuration(title, action, 3000);
  }
}
