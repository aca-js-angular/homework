import { Component, OnInit } from '@angular/core';

import {Tab} from '../tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {
  tabs: Tab[] = [
    {tabName: "home",color: "red"},
    {tabName: "news",color: "green"},
    {tabName: "contact",color: "blue"},
    {tabName: "about",color: "orange"},
  ]
  currentIndex: number;
  currentTab: Tab;
  constructor() { }

  changeTab(tab: Tab, i: number): void {
    this.currentTab = tab;
    this.currentIndex = i;
  }

  ngOnInit() {
  }

}
