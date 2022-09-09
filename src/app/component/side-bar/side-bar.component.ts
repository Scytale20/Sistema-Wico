import { Component, OnInit } from '@angular/core';
import { faBars, faRightFromBracket, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'



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
  isShow: boolean = false;
  


  constructor() { }

  ngOnInit(): void {
  }

  openClose(){
    this.isClose = !this.isClose;
  }

  showMenu(){
    let arrow = document.getElementsByClassName('arrow')
    for (var i = 0; i < arrow.length; i++){
      
       
    }
  }

}
