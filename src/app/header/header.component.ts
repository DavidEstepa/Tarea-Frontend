import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { Ilogging } from '../model/Ilogging';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logging: Ilogging;
  constructor(
    private commentsLogging: LoggingService
  ) {
    this.logging = {name: 'Conéctese', isActive: false};
    this.commentsLogging.currentState.subscribe(newState => {
      this.logging = newState;
    });
  }
  ngOnInit(): void {
  }

}
