import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = "http://localhost:3000";
  get_alarmData(){
    return this.httpClient.get(this.baseUrl + '/api/alarms');
  }
  constructor(private httpClient : HttpClient) { }
}
