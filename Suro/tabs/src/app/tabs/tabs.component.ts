import { Component, OnInit } from '@angular/core';
import { tabsDetails } from '../tabsDetails';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  color1:string;
  color2:string;
  color3:string;
  color4:string;
  tabsDetails:tabsDetails = {
    pageName: "Home",
    color: "red"
  }
  constructor() {
    this.color1 = this.tabsDetails.color;
   }
   openPage(pageName:string,color:string){
    this.tabsDetails = {
      pageName: pageName,
      color: color
    }
    if(pageName === 'Home'){
      this.color1 = color;
      this.color2 = this.color3 = this.color4 = '#555';
    }
    else if(pageName === 'News'){
      this.color2 = color;
      this.color1 = this.color3 = this.color4 = '#555';
    }
    else if(pageName === 'Contact'){
      this.color3 = color;
      this.color1 = this.color2 = this.color4 = '#555';
    }
    else{
      this.color4 = color;
      this.color1 = this.color2 = this.color3 = '#555';
    }
    console.log(this.tabsDetails)
   }
  ngOnInit() {
  }
  
}
