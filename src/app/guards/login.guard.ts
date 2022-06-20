import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDialogComponent } from '../components';
import { LoggedService } from '../services/logged.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private loggedService: LoggedService, private dialog: MatDialog) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogged = this.loggedService.isLogged;

    if (isLogged) return true;
    this.dialog.open(LoginDialogComponent, { data: { isLogged } });
    return false;
  }

}
