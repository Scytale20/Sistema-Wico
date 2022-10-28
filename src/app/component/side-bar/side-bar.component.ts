import { Component, OnInit, Input } from '@angular/core';
import { faBars, faRightFromBracket, faLayerGroup, faBook, faChartSimple, faAddressBook, faGear } from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { SideBarService } from 'src/app/service/side-bar.service';




@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  /* FontAwesome Icons*/
  faBars = faBars;
  logout = faRightFromBracket;
  faLayerGroup = faLayerGroup
  faChevronDown = faChevronDown
  faBook = faBook
  faChartSimple = faChartSimple
  faAddressBook = faAddressBook
  faGear = faGear

  /*data inout*/
  isOpen: boolean = true; 
  
  
  isShow1: boolean = false;
  isShow2: boolean = false;
  isShow3: boolean = false;
  


  constructor(private sideBarService: SideBarService) { }

  ngOnInit(): void {
    this.sideBarService.change.subscribe((isOpen) => {
      this.isOpen = isOpen;
    })
    
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
