import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  countriesDataBase;

  userform = this.fb.group({
    firstname: ['',[Validators.required,Validators.minLength(5)]],
    lastname: ['',[Validators.required, Validators.minLength(5)]],
    country: ['',[Validators.required]],
    phonenumber: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
  })

  get firstname() {return this.userform.get('firstname')}
  get lastname() {return this.userform.get('lastname')}
  get phonenumber() {return this.userform.get('phonenumber')}
  get country() {return this.userform.get('country')}

  


  messageAlert(){
    alert(`Hello ${this.firstname.value} , we will send you sms in +${this.country.value} -  ${this.phonenumber.value}`);

  }

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {

    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((data) => {
      this.countriesDataBase = data;
      this.userform.patchValue({
        country: data[11].callingCodes
      })
    })
  }

}
