import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  isLogged: boolean = false;

  toggleLogged() {
    this.isLogged = !this.isLogged;
  }

  constructor() { }
}
