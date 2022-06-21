import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionsService } from 'src/app/services/actions.service';
import { DeleteAllActionsDialogComponent } from '..';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.scss']
})
export class ActionsListComponent implements OnInit {

  constructor(public actionsService: ActionsService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  clearActions() {
    this.dialog.open(DeleteAllActionsDialogComponent);
  }
}
