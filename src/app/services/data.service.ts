import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Events} from '../models/eventModel'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  private colorSource=new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  colorObservable=this.colorSource.asObservable();
  constructor() { }
  
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  changeColor(color:string){
    this.colorSource.next(color);
  }

  // getchangedMessage() {
  //   return this.currentMessage;
  // }
}
