import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
 
divName = 'News'; // by default

tabcolor:string 
tabcontent:string 

tabContent: Object[] = [
  {name:'Home is where the heart is..', color: 'red'},
  {name:'Some news this fine day!', color:'green'},
  {name:'Get in touch, or swing by for a cup of coffee.', color: 'blue'},
  {name:'Who we are and what we do.', color: 'orange'},
]

tubTextbuilder(ind:number){
  
  this.tabcontent= this.tabContent[ind]["name"]
  this.tabcolor=this.tabContent[ind]["color"];
  
}

openTub(pressedButton: string): void{
  this.divName = pressedButton;
  }
 constructor() { }

  ngOnInit() {
    this.tabcontent= this.tabContent[1]["name"];
    this.tabcolor = this.tabContent[1]["color"]
  }

}
