import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private _http:HttpClient) { }

  getAllFlights(){
    return this._http.get("http://localhost:9090/flight/all-flights")
  }

  getAllBBookings(){
    return this._http.get("http://localhost:9090/flight/bookings")
  }

  createBooking(booking: any){
    return this._http.post("http://localhost:9090/flight/bookings",booking);
  }
 
  deleteBooking(flight:any){
    return this._http.delete("http://localhost:9090/flight/bookings/" + flight.id)
  }
}
