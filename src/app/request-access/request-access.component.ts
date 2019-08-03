import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss']
})
export class RequestAccessComponent implements OnInit {

  constructor(private Router: Router) { }
  loadingDiv = false;
  ngOnInit() {
  }
  signUpLinkedin() {
    let self = this;
    self.loadingDiv = true;
    setTimeout(function () {
      self.loadingDiv = false;
      self.Router.navigate(["/signup"])
    }, 2000)
  }

}
