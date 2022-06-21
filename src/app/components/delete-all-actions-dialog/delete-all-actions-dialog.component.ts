import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-delete-all-actions-dialog',
  templateUrl: './delete-all-actions-dialog.component.html',
  styleUrls: ['./delete-all-actions-dialog.component.scss']
})
export class DeleteAllActionsDialogComponent implements OnInit {

  constructor(public actionsService: ActionsService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  clearActions() {
    this.actionsService.clearActions();
    this.snackBar.open("All actions have been deleted", undefined, { duration: 3000, horizontalPosition: 'start' });
  }

}
