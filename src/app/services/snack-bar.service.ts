import { Injectable, Component } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
@Component({
  styles: [

  ]
})
export class SnackbarService {
  message: string = '';
  actionButtonLabel: string = '';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 3000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private snackBar : MatSnackBar) { }

  open(message, operation?){
    this.message=message;
    this.actionButtonLabel = operation;
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    config.panelClass= ['greySnackbar']
    this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
  }
}