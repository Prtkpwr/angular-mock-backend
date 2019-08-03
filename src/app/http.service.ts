import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private HttpClient: HttpClient) { }

  public signUp(data) {
    // here we can call an API and return the observable
    return this.HttpClient.post("/signUp", data)
  }
}
