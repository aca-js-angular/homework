import { Component, OnInit, Input } from '@angular/core';
import { tabsDetails } from '../tabsDetails';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
 @Input() tabsDetails: tabsDetails;
 showHome:boolean = false;
 showNews:boolean = false;
 showContact:boolean = false;
 showAbout:boolean = false;
  constructor() {
   }
   ngOnChanges(){
     if(this.tabsDetails.pageName === "Home"){
       this.showHome = true;
       this.showNews = this.showContact = this.showAbout = false;
     }
     else if(this.tabsDetails.pageName === "News"){
      this.showHome = this.showContact = this.showAbout = false;
      this.showNews = true;
     }
     else if(this.tabsDetails.pageName === "Contact"){
      this.showNews = this.showHome = this.showAbout = false;
       this.showContact = true;
     }
     else if(this.tabsDetails.pageName === "About"){
      this.showNews = this.showContact = this.showHome = false;
      this.showAbout = true;
     }
   }
  ngOnInit() {
  }

}
