import { Component } from '@angular/core';
import { DataService } from 'src/app/@Shared/data.service';

@Component({
  selector: 'app-ticketbooked',
  templateUrl: './ticketbooked.component.html',
  styleUrls: ['./ticketbooked.component.scss']
})
export class TicketbookedComponent {

  constructor(private service: DataService) { }

  getName() {
    sessionStorage.removeItem('passenger');
    sessionStorage.removeItem('selectedAgecategory');
    sessionStorage.removeItem('totalTicketPrice');
    return sessionStorage.getItem("name")
  }
  
}
