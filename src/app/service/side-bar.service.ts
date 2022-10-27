import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  constructor() { }

  isClose: boolean = true;

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  openclose(){
    this.isClose = !this.isClose
    this.change.emit(this.isClose)
    
  }
}
