import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Ilogging } from '../model/Ilogging';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private currentStateSubject: BehaviorSubject<Ilogging>;
  public currentState: Observable<Ilogging>;
  private State: Ilogging;
  constructor() {
    this.currentStateSubject = new BehaviorSubject<Ilogging>({name: 'Conéctese', isActive: false});
    this.currentState = this.currentStateSubject.asObservable();
    this.State = {name: 'Conéctese', isActive: false};
  }

  public confirm(name, password){
    if (name === 'User@gmail.com' && password === '0000'){
      this.State = {name: 'User@gmail.com', isActive: true};
    }
    else{
      this.State = {name: 'Conéctese', isActive: false};
    }
    this.currentStateSubject.next(this.State);
    if (this.State.isActive === true){
      return true;
    }
    else {
      return false;
    }
  }
}
