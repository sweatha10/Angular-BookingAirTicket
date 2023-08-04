import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingticketComponent } from './bookingticket/bookingticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [
    BookingticketComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
],
exports: [
  BookingticketComponent

]
})
export class BookingticketModule { }
