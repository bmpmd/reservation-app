import { Reservation } from './../models/reservation';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservations : Reservation[] = [];


  //local storage/arr set here 
  constructor() { 
    let savedReservations = localStorage.getItem("reservations")
    this.reservations = savedReservations ? JSON.parse(savedReservations) : []
  }


  getReservations(): Reservation[]{
    return this.reservations
  }

  createReservation(reserveration: Reservation):void{
    reserveration.id = Date.now().toString()

    this.reservations.push(reserveration)
    localStorage.setItem("reservations", JSON.stringify(this.reservations))

    console.log(this.reservations)
  }

  getReservation(id:string) : Reservation | undefined {
    return this.reservations.find(res => res.id === id)
  }



  deleteReservation(id:string): void{
    let index = this.reservations.findIndex(res => res.id === id)
   
      this.reservations.splice(index, 1)
      localStorage.setItem("reservations", JSON.stringify(this.reservations))

      
    
  }

  updateReservation(id: string, reservation:Reservation):void{
    let index = this.reservations.findIndex(res => res.id === id)
    
    this.reservations[index] = reservation
    //local storage here 
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
    
  }

}
