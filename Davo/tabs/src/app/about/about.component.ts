import { Component, OnInit, OnDestroy} from '@angular/core';
import { RequestService } from '../Service/MakeRequest/request.service'
import { ActivatedRoute } from '@angular/router';
    
interface Users {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  selected: {}
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ RequestService ]
})
export class AboutComponent implements OnInit, OnDestroy {
  cityandPhones: {};
  users: Users;
  v
  constructor(private makeReuest: RequestService,private activatedRoute: ActivatedRoute) { }

  

  ngOnInit() {
    this.users = {
      firstName: '',
      lastName: '',
      phone: ' ',
      city: '',
      selected: {}
    }
    this.makeReuest.makeRequest('https://restcountries.eu/rest/v2/all')
    .subscribe({
      next: result =>  this.cityandPhones = result,
      error: (err) => console.log(err),
      complete: ()=> console.log('compleated')
    })

    this.activatedRoute.url.subscribe(url => console.log(url))

  }
  selectCity(ind): void {
    console.log(ind)
  }
  ngOnDestroy() {
  }


}
