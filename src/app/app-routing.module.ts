import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingticketComponent } from './Modules/bookingticket/bookingticket/bookingticket.component';
import { AuthGuard } from './@Core/auth.guard';
import { TicketbookedComponent } from './Pages/ticketbooked/ticketbooked/ticketbooked.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
