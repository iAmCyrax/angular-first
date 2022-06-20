import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionsService } from 'src/app/services/actions.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

interface DeleteAllDialogData {
  userDetailsService: UserDetailsService;
}

@Component({
  selector: 'app-delete-all-dialog',
  templateUrl: './delete-all-dialog.component.html',
  styleUrls: ['./delete-all-dialog.component.scss']
})
export class DeleteAllDialogComponent implements OnInit {

  constructor(private userDetailsService: UserDetailsService, @Inject(MAT_DIALOG_DATA) public data: DeleteAllDialogData, private snackBar: MatSnackBar, private actionsService: ActionsService) { }

  ngOnInit(): void {
  }

  deleteAllUsers() {
    this.userDetailsService.clearUsers();
    this.snackBar.open(`All users have been deleted.`, undefined, { duration: 3000, horizontalPosition: 'start' });
    this.actionsService.addAction({ type: 'all-users-deleted', time: new Date() });
  }

}
