import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private build: FormBuilder,
  ){}

  inputData = this.build.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    country: ['',Validators.required],
    phone: ['',[
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      ]
    ]
  })

  get firstName(){
    return this.inputData.get('firstName')
  }
  get lastName(){
    return this.inputData.get('lastName')
  }
  get country(){
    return this.inputData.get('country')
  }
  get phone(){
    return this.inputData.get('phone')
  }

  showMessage(){
    const message = `hello ${this.firstName.value} ${this.lastName.value} \nWe will send message to number +${this.country.value}-${this.phone.value}`
    alert(message)
  }

  countryDatabase: any;
  Api: string = "https://restcountries.eu/rest/v2/all"

  getCountryData(){
    this.http.get(this.Api)
    .subscribe(resolve => {
      this.countryDatabase = resolve;
      this.country.setValue(this.countryDatabase[11].callingCodes) // Default 'Armenia'
    });
  }

  ngOnInit(){
    this.getCountryData();  
  }
}
