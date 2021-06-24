import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  allFlights: Object| any;
  finalFlights : Object| any;
  allTickets: Object| any;
 
  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
  }

  searchAirline(formObj:any){
    console.log("in function")
    console.log(formObj)
    this.flightService.getAllFlights().subscribe((Response)=>{
      this.allFlights = Response
    })
  }

  bookTicket(flight:any){
    this.flightService.createBooking(flight).subscribe((Response)=>{
      this.allTickets = Response
      alert("booking is confirmed.. you can check your bookings in manage booking tab")
    })
  }
}
