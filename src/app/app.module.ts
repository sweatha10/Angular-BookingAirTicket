import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Pages/header/header.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookingticketModule } from './Modules/bookingticket/bookingticket.module';
import { BookingticketComponent } from './Modules/bookingticket/bookingticket/bookingticket.component';
import { TicketbookedModule } from './Pages/ticketbooked/ticketbooked.module';
import { TicketbookedComponent } from './Pages/ticketbooked/ticketbooked/ticketbooked.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './@Core/auth.guard';


const routes: Routes = [
  {
    path:'',
    redirectTo:'bookingticket',
    pathMatch:'full'
  },
  {
    path:'bookingticket',
    component: BookingticketComponent
  },
  {
    path: 'ticketbooked',
    component: TicketbookedComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    BookingticketModule,
    TicketbookedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
