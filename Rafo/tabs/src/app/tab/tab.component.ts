import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() info: Object;

  descriptions: string[] = [
    'Home is where the heart is..',
    'Some news this fine day!',
    'Get in touch, or swing by for a cup of coffee.',
    'Who we are and what we do.',
  ]

  constructor() { }

  ngOnInit() {
  }

}
