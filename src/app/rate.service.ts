import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  uri = 'http://' + window.location.hostname + ':8080/rates/';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.uri}`);
  }
}
