import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faBars = faBars
  menuBtn: boolean = false;

  constructor() { }

  openClose(){
    this.menuBtn = !this.menuBtn;
    console.log(this.menuBtn)
  }

  ngOnInit(): void {
  }

}
