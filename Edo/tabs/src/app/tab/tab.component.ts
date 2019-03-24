import { Component, OnInit, Input } from '@angular/core';

import { Tab } from '../tab';
import { tabInformation } from 'src/tabInformation';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass']
})
export class TabComponent implements OnInit {
  @Input() index: number;
  @Input() tab: Tab;
  constructor() { }
  tabInformation: tabInformation[] = [
    {topicName:"home",topic:"Home is where the heart is.."},
    {topicName:"news",topic:"Some news this fine day!"},
    {topicName:"contact",topic:"Get in touch, or swing by for a cup of coffee."},
    {topicName:"about",topic:"Who we are and what we do."},
  ]
  ngOnInit() {
  }

}
