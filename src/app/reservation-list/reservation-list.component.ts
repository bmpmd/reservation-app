import { ReservationService } from './../reservation/reservation.service';
import { Component } from '@angular/core';
import { Reservation } from '../models/reservation';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{

  reservations: Reservation[] = []

  constructor(private reservationService: ReservationService){

  }

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations()
  }




}
