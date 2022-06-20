import { Injectable } from '@angular/core';
import { Action } from '../interfaces/actions';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  // TODO: User eklenmesiyle de yeni action eklenebilir...
  actions: Action[] = [];

  addAction(action: Action) {
    this.actions.push(action);
  }

  removeAction(action: Action) {
    const index = this.actions.indexOf(action);
    if (index > -1) {
      this.actions.splice(index, 1);
    }
  }

  clearActions() {
    this.actions.splice(0, this.actions.length);
  }

  constructor() { }
}
