import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router: Router, private httpclient: HttpClient) {}

  getJson(): Observable<any>{
    return this.httpclient.get<any>("./assets/JsonFiles/ticket.json")
  }

  booked(){
    return this.router.navigate(['./ticketbooked'])
  }

  isBooked(){
    return !!sessionStorage.getItem("passenger")
  }
}
