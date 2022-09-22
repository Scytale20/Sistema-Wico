import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  faBars = faBars
  @Output() menuBtn: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onClick(){
    this.menuBtn.emit() 
    
  }

  ngOnInit(): void {
  }

}
