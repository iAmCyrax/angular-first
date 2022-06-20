import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogData } from 'src/app/interfaces/dialog-data';
import { User } from 'src/app/interfaces/user';
import { ActionsService } from 'src/app/services/actions.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private snackBar: MatSnackBar, private userDetailsService: UserDetailsService, private actionsService: ActionsService) { }

  deleteUser(user: User) {
    this.snackBar.open(`User (${user.name}) successfully deleted.`, undefined, { duration: 2000, horizontalPosition: 'start' });
    this.userDetailsService.removeUser(user);
    this.actionsService.addAction({ type: 'user-deleted', time: new Date(), user: this.data.user });
  }

  ngOnInit(): void {
  }

}
