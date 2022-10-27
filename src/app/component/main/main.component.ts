import { Component, OnInit } from '@angular/core';
import { SideBarService } from 'src/app/service/side-bar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private sideBarService: SideBarService) { }

  isOpen: boolean = true;

  ngOnInit(): void {
    this.sideBarService.change.subscribe((isOpen) => {
      this.isOpen = isOpen;
    })
  }
}


