import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/interfaces/user';
import { ActionsService } from 'src/app/services/actions.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(private snackBar: MatSnackBar, private errorSnackbar: MatSnackBar, private userDetailsService: UserDetailsService, private actionsService: ActionsService) { }

  name: string;
  surname: string;
  message: string;
  email: string;

  onSubmit(): void {
    const data: User = {
      name: this.name,
      surname: this.surname,
      message: this.message,
      email: this.email
    };

    if (!this.name || !this.surname || !this.message) {
      this.errorSnackbar.open("Please type blank areas", "OK", { duration: 2000, horizontalPosition: 'start' });
      return;
    }

    if (this.userDetailsService.users.some(user => ((user.name === this.name && user.surname === this.surname) || user.email === this.email))) {
      this.errorSnackbar.open("This user was sended another message. Please send the message with another user name and surname (or email).", "OK", { duration: 5000, horizontalPosition: 'start' });
      this.clearAreas();
      return;
    }

    try {
      this.openSnackBar();
      this.userDetailsService.addUser(data);
      this.actionsService.addAction({ type: 'user-added', time: new Date(), user: data });

      this.clearAreas();
    } catch (error) {
      this.errorSnackbar.open("Something went wrong. Please try again", "OK", { duration: 2000, horizontalPosition: 'start' });
      this.clearAreas();
      console.error(error);
    }
  }

  clearAreas() {
    this.name = this.surname = this.message = this.email = "";
  }

  openSnackBar(): void {
    this.snackBar.open("Message was successfully sended", "OK", { duration: 3000, horizontalPosition: 'start' });
  }
}
