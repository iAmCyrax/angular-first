import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionsService } from 'src/app/services/actions.service';
import { LoggedService } from 'src/app/services/logged.service';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent implements OnInit {

  constructor(private loggedService: LoggedService, private router: Router, private actionsService: ActionsService) { }

  ngOnInit(): void {
  }

  logOut(): void {
    const date = new Date();
    try {
      this.loggedService.isLogged = false;
      this.router.navigate(["home"]);
      this.actionsService.addAction({ type: 'logout', time: date });
    } catch (error) {
      alert("Uh-oh! Check the console and fix error!!");
      this.actionsService.addAction({ type: 'logout-error', time: date });
    }
  }

  cancelLogout(): void {
  }
}
