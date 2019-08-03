import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { SignupComponent } from './signup/signup.component';
import { RequestSuccessComponent } from './request-success/request-success.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestAccessComponent,
    SignupComponent,
    RequestSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
