import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../services/logging.service';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public sidebarOpen = false;
  constructor(
    private loggingService: LoggingService,
    private router: Router,
    private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.sidebarSubject.subscribe(value => {
      this.sidebarOpen = !this.sidebarOpen;
    });
  }
  salida(){
    let state: boolean;
    state = this.loggingService.confirm('', '');
    if (!state){
      this.router.navigateByUrl('/ingreso');
    }
  }
}
