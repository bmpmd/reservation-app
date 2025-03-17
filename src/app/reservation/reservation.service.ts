import { Reservation } from './../models/reservation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservations : Reservation[] = [];
  apiUrl = "http://localhost:3001"

  //using mockoon for mocking a backend api for now 
  constructor(private httpClient:HttpClient) { 
    // let savedReservations = localStorage.getItem("reservations")
    // this.reservations = savedReservations ? JSON.parse(savedReservations) : []

  }


  getReservations(): Observable<Reservation[]>{
    // return this.reservations
    return this.httpClient.get<Reservation[]>(this.apiUrl + "/reservations")

  }

  createReservation(reservation: Reservation):Observable<void>{
    // reserveration.id = Date.now().toString()

    // this.reservations.push(reserveration)
    // localStorage.setItem("reservations", JSON.stringify(this.reservations))

    // console.log(this.reservations)
    return this.httpClient.post<void>(this.apiUrl + "/reservation/", reservation)

  }

  getReservation(id:string) : Observable<Reservation>{
    // return this.reservations.find(res => res.id === id)
    return this.httpClient.get<Reservation>(this.apiUrl + "/reservation/" + id)
  }



  deleteReservation(id:string): Observable<void>{
    // let index = this.reservations.findIndex(res => res.id === id)
   
    //   this.reservations.splice(index, 1)
    //   localStorage.setItem("reservations", JSON.stringify(this.reservations))
    return this.httpClient.delete<void>(this.apiUrl + "/reservation/" + id)

      
    
  }

  updateReservation(id: string, reservation:Reservation):Observable<void>{
    // let index = this.reservations.findIndex(res => res.id === id)
    
    // this.reservations[index] = reservation
    // //local storage here 
    // localStorage.setItem("reservations", JSON.stringify(this.reservations))
    return this.httpClient.put<void>(this.apiUrl + "/reservation/" + id, reservation)
    
  }

}
