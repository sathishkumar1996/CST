import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendToHeaderService {
  private date = new Subject<any>();
  private name = new Subject<any>();
  date$ = this.date.asObservable();
  name$ = this.name.asObservable();

  setDate(date: any) {
    this.date.next(date);
  }
  setName(name: any) {
    this.name.next(name);
  }
  constructor() { }
}
