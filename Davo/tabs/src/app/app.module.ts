import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutComponent } from '../app/about/about.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RequestService } from '../app/Service/MakeRequest/request.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule,FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
