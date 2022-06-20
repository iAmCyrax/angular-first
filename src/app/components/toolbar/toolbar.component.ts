import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { routes } from 'src/app/app-routing.module';
import { TWITTER_ICON, GITHUB_ICON } from 'src/app/utils/icons';
import { LogoutDialogComponent } from 'src/app/components';
import { LoggedService } from 'src/app/services/logged.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  routes = routes;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public loggedService: LoggedService, private dialog: MatDialog) {
    iconRegistry.addSvgIconLiteral("twitter", sanitizer.bypassSecurityTrustHtml(TWITTER_ICON));
    iconRegistry.addSvgIconLiteral("github", sanitizer.bypassSecurityTrustHtml(GITHUB_ICON));
  }

  ngOnInit(): void {
  }

  logOut() {
    this.dialog.open(LogoutDialogComponent);
  }

}