import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.scss']
})
export class ActionsListComponent implements OnInit {

  constructor(public actionsService: ActionsService) { }

  ngOnInit(): void {
  }

}
