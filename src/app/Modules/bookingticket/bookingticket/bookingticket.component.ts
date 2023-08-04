import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ticketlist } from '../ticketlist';
import { DataService } from 'src/app/@Shared/data.service';

@Component({
  selector: 'app-bookingticket',
  templateUrl: './bookingticket.component.html',
  styleUrls: ['./bookingticket.component.scss']
})
export class BookingticketComponent implements OnInit {

  ticketData: any;
  key: any;
  totalTicketFare: number = 0;
  name!: string;
  selectedAgecategory!: string;
  passenger!: number;

  selectedFormField: Ticketlist ={
    name:'',
    passenger: 0,
    selectedAgecategory:''
  };

  ticketForm!: FormGroup;
  replaceSelection: any;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.getDataJson();
    this.ticketformgroup();
  }

  getDataJson(){
    this.service.getJson().subscribe((data: any) => {
      this.ticketData = data;
    });
    // this.service.getJson().toPromise().then((data: any) => {
    //   this.ticketData = data;
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  ticketformgroup() {
    this.ticketForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      selectedAgecategory: new FormControl('', [Validators.required]),
      passenger: new FormControl('', [Validators.required])
    });
  }

  private clearForm() {
    this.selectedFormField;
    this.name = '';
    this.passenger = 0;
    this.selectedAgecategory = '';
  }

  ticketbooked() {
    const savedPassenger = sessionStorage.getItem('passenger');
    const parsedPassenger = savedPassenger !== null ? parseInt(savedPassenger, 10) : 0;

    if (sessionStorage.getItem("name") === this.name && parsedPassenger === this.passenger || sessionStorage.getItem("selectedAgecategory") === this.selectedAgecategory) {
      this.service.booked();
    } else {
      alert("Please fill in all the required fields.");
    }
    this.clearForm();
  }
  checkWord(event: KeyboardEvent){
    this.key = event.keyCode;
           
    const allowedFunctionalKeys = [8, 32, 37, 39];

    if (!allowedFunctionalKeys.includes(this.key) && !((this.key >= 65 && this.key <= 90) || 
    (this.key >= 97 && this.key <= 122))) {
      event.preventDefault();
    }
  }

  checkNumber(event: KeyboardEvent): void {

    const functionalKeys = ['Backspace', 'ArrowRight', 'ArrowLeft'];
    const numericKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (functionalKeys.indexOf(event.key) !== -1 || numericKeys.indexOf(event.key) !== -1) {
      return;
    }
    event.preventDefault();
  }

  saveTicketValue() {
    sessionStorage.setItem('name', this.name);
    sessionStorage.setItem('passenger', this.passenger.toString());
    sessionStorage.setItem('selectedAgecategory', this.selectedAgecategory);

    const ticketlist: Ticketlist = {
      name: this.name,
      passenger: this.passenger,
      selectedAgecategory: this.selectedAgecategory
    }
  }

  search() {
    this.saveTicketValue();
    return this.getTotalTicketPrice()
  }

  totalTicketPrice() {
    const savedPassenger = sessionStorage.getItem('passenger');
    const savedSelectedAgecategory = sessionStorage.getItem('selectedAgecategory');

    const total_fare = this.ticketData[0].flight[1].total_fare;
    const total_base_fare = this.ticketData[0].flight[1].total_base_fare;
    const single_adult_fare = this.ticketData[0].flight[1].single_adult_fare;

    const adulttax = this.ticketData[0].flight[2].fare[0].tax;
    const adultfee = this.ticketData[0].flight[2].fare[0].fee;

    const childtax = this.ticketData[0].flight[2].fare[1].tax;
    const childfee = this.ticketData[0].flight[2].fare[1].fee;

    const infanttax = this.ticketData[0].flight[2].fare[2].tax;
    const infantfee = this.ticketData[0].flight[2].fare[2].fee;
    
    const passengerCount = savedPassenger !== null ? parseInt(savedPassenger, 10) : 0;

    const singleAdultTicketFare = total_fare + total_base_fare + single_adult_fare + adulttax + adultfee;
    const singleChildTicketFare = total_fare + total_base_fare + childtax + childfee;
    const singleInfantTicketFare = total_fare + total_base_fare + infanttax + infantfee;

    const totalAdultTicketFare = (singleAdultTicketFare) * passengerCount;
    const totalChildTicketFare = (singleChildTicketFare) * passengerCount;
    const totalInfantTicketFare = (singleInfantTicketFare) * passengerCount;

    if (savedSelectedAgecategory === 'Adult') {
      return totalAdultTicketFare
    }
    if (savedSelectedAgecategory === 'Child') {
      return totalChildTicketFare
    }
    if (savedSelectedAgecategory === 'Infant') {
      return totalInfantTicketFare
    }

    return this.totalTicketFare

  }

  getTotalTicketPrice() {
    sessionStorage.setItem('totalTicketPrice', this.totalTicketPrice().toString());
    const savedTotalTicketPrice = sessionStorage.getItem('totalTicketPrice');
    const parsedTotalTicketPrice = savedTotalTicketPrice !== null ? parseInt(savedTotalTicketPrice, 10) : 0;

    return parsedTotalTicketPrice
  }

}

// this.service.getJson().subscribe((data)=> {
    //   console.log(data);  
    // },
    // (error)=>{
    //   console.error('Error fetching JSON:', error);
      
    // },
    // ()=>{
    //   console.log('HTTP request completed');
      
    // }
    // );

// isFormFilled(): boolean {    
  //   return this.ticketForm.valid;
  // }

// checkLength2(e: { key: string; preventDefault: () => void; }, input: { selectionStart: any; selectionEnd: any; value: any; }) {
  //   const functionalKeys = ['Backspace', 'ArrowRight', 'ArrowLeft'];


  //   if (functionalKeys.indexOf(e.key) !== -1) {
  //     return;
  //   }

  //   const keyValue = +e.key;
  //   if (isNaN(keyValue)) {
  //     e.preventDefault();
  //     return;
  //   }

  //   const hasSelection = input.selectionStart !== input.selectionEnd && input.selectionStart !== null;
  //   let newValue;
  //   if (hasSelection) {
  //     newValue = this.replaceSelection(input, e.key)
  //   } else {
  //     newValue = input.value + keyValue.toString();
  //   }

  //   if (+newValue > 100 || newValue.length > 100) {
  //     e.preventDefault();
  //   }
  // } 
