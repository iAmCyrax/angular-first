import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoggedService } from 'src/app/services/logged.service';
import { ActionsService } from 'src/app/services/actions.service';
import { environment } from 'src/environments/environment';

// interface LoginData {
//   isLogged: boolean;
// }

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  password: string;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, public loggedService: LoggedService, private router: Router, private snackBar: MatSnackBar, private actionsService: ActionsService) { }

  ngOnInit(): void {
  }

  login(): void {
    const date = new Date();
    if (this.password === environment.password) {
      this.loggedService.isLogged = true;
      this.router.navigate(["dashboard"]);
      this.closeDialog();
      this.actionsService.addAction({ password: this.password, type: 'login', time: date });
      this.snackBar.open("Welcome Ahmet!", undefined, { duration: 2000 });
      return;
    } else if (!this.password) {
      this.snackBar.open("Please type your password or click \"CANCEL\" button.", "OK", { duration: 3000 });
      return;
    } else {
      this.password = '';
      this.snackBar.open("The password is wrong. Please try again.", "OK", { duration: 3000 });
      this.actionsService.addAction({ password: this.password, type: 'login-error', time: date });
    }
  }

  goHome(): void {
    this.router.navigate(["home"]);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
