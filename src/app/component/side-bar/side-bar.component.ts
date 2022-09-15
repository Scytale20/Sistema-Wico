import { Component, OnInit } from '@angular/core';
import { faBars, faRightFromBracket, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { Renderer2 } from '@angular/core'



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  faBars = faBars;
  logout = faRightFromBracket;
  faLayerGroup = faLayerGroup
  faChevronDown = faChevronDown

  isClose: boolean = false;
  isShow1: boolean = false;
  isShow2: boolean = false;
  isShow3: boolean = false;
  


  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  openClose(){
    this.isClose = !this.isClose;
  }

  showMenu1(){
    this.isShow1 = !this.isShow1
  }
  showMenu2(){
    this.isShow2 = !this.isShow2
  }
  showMenu3(){
    this.isShow3 = !this.isShow3
  }

}