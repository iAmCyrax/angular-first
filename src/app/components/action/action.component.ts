import { Component, Input, OnInit } from '@angular/core';
import { Action } from 'src/app/interfaces/actions';
import { generateDate } from 'src/app/utils/generateDate';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @Input() action: Action;
  hide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHiding() {
    this.hide = !this.hide;
  }

  toDate() {
    return generateDate(this.action.time);
  }

}
