import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  uri = 'http://' + window.location.hostname + ':8080/plans/';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.uri}`);
  }
}
