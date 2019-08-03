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
    this.loadingDiv = true;
    let self = this
    setTimeout(function () {
      if (self.phoneNumber) {
        self.phoneNumberValue = true;
        self.loadingDiv = false;
        let data = {
          name: this.name,
          email: this.email,
          phone: this.phoneNumber
        }
        self.HttpService.signUp(data).subscribe((res) => {
          console.log(res)
          //redirecting to thank you page on success
          self.Router.navigate(["/request-success"])
        }, (err) => {
          //redirecting to thank you page on error as there is no backend connected for now
          self.Router.navigate(["/request-success"])
          console.log(err)
        })
      } else {
        self.phoneNumberValue = false;
        self.loadingDiv = false;
      }
    }, 2000)
  }
}
