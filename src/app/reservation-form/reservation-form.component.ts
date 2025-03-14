import { ReservationService } from './../reservation/reservation.service';
import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent {
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute

   ) {
    this.reservationForm = formBuilder.group({
      checkinDate: ['', Validators.required],
      checkoutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

      // patch the form if we are editing a current one 
      //by getting the reservation and populating the fields 
    let id = this.activatedRoute.snapshot.paramMap.get("id")
    if(id){
      let reservation = this.reservationService.getReservation(id)
      if(reservation)
        this.reservationForm.patchValue(reservation)
    }
  }

  onSubmit() {
    if(this.reservationForm.valid){
      //need logic for adding or editing 
      let reservation = this.reservationForm.value

      let id = this.activatedRoute.snapshot.paramMap.get("id")

      //if editing
      if(id){

        //update
        this.reservationService.updateReservation(id, reservation)
      }
      else{
        //otherwise we r adding
        this.reservationService.createReservation(reservation)

      }

      this.router.navigate(['/list'])

    }
    
  }
}
