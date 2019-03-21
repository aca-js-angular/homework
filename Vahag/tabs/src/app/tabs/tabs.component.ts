import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabs: string[] = ['Home','News','Contact','About'];

  tabsContent: object[] = [{
    color: 'red',
    content: 'Home is where the heart is..'
  },
  {
    color: 'green',
    content: 'Some news this fine day!'
  },
  {
    color: 'blue',
    content: 'Get in touch, or swing by for a cup of coffee.'
  },
  {
    color: 'orange',
    content: 'Who we are and what we do.'
  }]

  selectedTab: object;

  changeSelectedTab(ind: number): void {
    this.selectedTab = {title: this.tabs[ind], discription: this.tabsContent[ind]};
    console.log(this.selectedTab.discription.color);
  }

  constructor() { }

  ngOnInit() {
    this.selectedTab = {title: this.tabs[0], discription: this.tabsContent[0]};
  }

}
