import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ilogging } from '../model/Ilogging';
import { LoggingService } from '../services/logging.service';
@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  public loggingForm: FormGroup;
  constructor(
    private formBulder: FormBuilder,
    private loggingService: LoggingService)
    {
    this.loggingForm = this.formBulder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loggingService.confirm('', '');
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.loggingService.confirm(this.loggingForm.value.name, this.loggingForm.value.password);
  }
}
