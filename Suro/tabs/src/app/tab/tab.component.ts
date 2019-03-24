import { Component, OnInit, Input } from '@angular/core';
import { Tabs } from '../tabs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() tab: Tabs;
  constructor() { }

  ngOnInit() { }

}
