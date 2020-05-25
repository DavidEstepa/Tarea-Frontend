import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public sidebarSubject: Subject<boolean>;
  constructor() {
    this.sidebarSubject = new Subject<boolean>();
    this.sidebarSubject.next(false);
   }
}
