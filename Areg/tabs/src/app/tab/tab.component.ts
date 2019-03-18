import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
 
divName = 'News'; // by default

funk(pressedButton: string): void{
  this.divName = pressedButton;
  }
 constructor() { }

  ngOnInit() {

  }

}
