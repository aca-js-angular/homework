import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  

  @Output() pressedButton = new EventEmitter<string>();
  @Output() pressedIndex= new EventEmitter<number>();

  clikedName = 'News'; // by default

  buttonNames: string[] = ['Home', 'News', 'Contact', 'About'];
  colors: string[] = ['red', 'green', 'blue', 'orange'];

  pageOpen(butsname: string, ind: number): void {
    this.pressedButton.emit(butsname);
    
    this.pressedIndex.emit(ind);
    this.clikedName = butsname;
    
  }


  constructor() { }

  ngOnInit() {
  }

}
