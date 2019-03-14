import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  topics: Object[] = [
    {name: 'Home', color: 'red'},
    {name: 'News', color: 'green'},
    {name: 'Contact', color: 'blue'},
    {name: 'About', color: 'orange'},
  ]

  selectedTopic: Object;
  selectedTopicIndex: number;

  selectTopic(topic: Object, index: number): void{
    this.selectedTopic = topic
    this.selectedTopicIndex = index
  }

  constructor() { }

  ngOnInit() {
  }

}
