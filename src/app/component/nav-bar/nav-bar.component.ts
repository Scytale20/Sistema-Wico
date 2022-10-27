import { Component,OnInit } from '@angular/core';
import { SideBarService } from 'src/app/service/side-bar.service'
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  faBars = faBars
  

  constructor(private sideBarService: SideBarService) { }

  onClick(){
     this.sideBarService.openclose()
    
  }

  ngOnInit(): void {
  }

}
