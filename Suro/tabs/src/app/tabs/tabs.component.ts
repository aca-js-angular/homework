import { Component, OnInit } from '@angular/core';
import { TABS } from '../tabsdetail';
import { Tabs } from '../tabs'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
   tabs = TABS;
   selectedTab:Tabs;
  constructor() {
   }
  ngOnInit() {
    this.selectedTab = TABS[1];
  }
  onSelect(tab:Tabs):void{
    this.selectedTab = tab;
  }
  
}
