import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  uri = 'http://' + window.location.hostname + ':8080/calculate/';

  constructor(private http: HttpClient) { }

  calculate(dddOrigin:any, dddTarget:any,  minutes:any, minutesPlan:any) {
    return this.http.get(this.uri + dddOrigin + '/' + dddTarget 
      + '/' + minutes + (minutesPlan ? ('/' + minutesPlan) : ''));
  }
}
