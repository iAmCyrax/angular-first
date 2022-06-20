import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { DeleteAllDialogComponent } from '../delete-all-dialog/delete-all-dialog.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  constructor(public userDetailsService: UserDetailsService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteAllUsers() {
    this.dialog.open(DeleteAllDialogComponent, { data: { userDetailsService: this.userDetailsService } });
  }

}
