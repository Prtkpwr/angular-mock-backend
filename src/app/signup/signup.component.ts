import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private Router: Router, private HttpService: HttpService) { }
  name;
  email;
  phoneNumber;
  phoneNumberValue = true;
  loadingDiv = false;
  ngOnInit() {
    this.name = "John Doe";
    this.email = "john@requantive.com"
  }
  signUpFunction() {
    let self = this
    if (self.phoneNumber) {
      self.phoneNumberValue = true;
      let data = {
        name: self.name,
        email: self.email,
        phone: self.phoneNumber
      }
      self.loadingDiv = true;
        self.HttpService.signUp(data).subscribe((res) => {
          console.log(res)
          self.loadingDiv = false;
          //redirecting to thank you page on success
          self.Router.navigate(["/request-success"])
        }, (err) => {
          self.loadingDiv = false;
          console.log(err)
        })
      } else {
        self.phoneNumberValue = false;
        self.loadingDiv = false;
      }
  }
}
