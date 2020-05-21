import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(
    private loggingService: LoggingService,
    private router: Router) { }

  ngOnInit(): void {
  }
  salida(){
    let state: boolean;
    state = this.loggingService.confirm('', '');
    if (!state){
      this.router.navigateByUrl('/ingreso');
    }
  }
}
