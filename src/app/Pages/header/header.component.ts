import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/@Shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ticketData: any;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getDataJson();
  }

  getDataJson() {
    this.service.getJson().subscribe((data) => {
      this.ticketData = data;
    })
  }

  getFlightName() {
    const flightName = this.ticketData[0].airline.toUpperCase();
    return flightName
  }


}
