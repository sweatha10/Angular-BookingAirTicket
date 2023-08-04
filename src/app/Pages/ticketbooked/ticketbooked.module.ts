import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketbookedComponent } from './ticketbooked/ticketbooked.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';





@NgModule({
  declarations: [
    TicketbookedComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    TicketbookedComponent
  ]
})
export class TicketbookedModule { }
