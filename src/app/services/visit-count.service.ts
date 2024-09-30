import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitCountService {

  visitCount = 1

  constructor() { }

  setcount() {
    this.visitCount = this.visitCount + 1
  }

  getcount(){
    return this.visitCount
  }
}
