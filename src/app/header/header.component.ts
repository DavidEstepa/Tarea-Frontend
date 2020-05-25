import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { Ilogging } from '../model/Ilogging';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  width = 0;
  logging: Ilogging;
  constructor(
    private commentsLogging: LoggingService,
    private sidebarService: SidebarService
  ) {
    this.logging = {name: 'Conéctese', isActive: false};
    this.commentsLogging.currentState.subscribe(newState => {
      this.logging = newState;
    });
  }
  ngOnInit(): void {
  }
  mostrar(){
    this.sidebarService.sidebarSubject.next(true);
  }
}
