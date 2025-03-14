import { ReservationService } from './../reservation/reservation.service';
import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

   ) {
    this.reservationForm = formBuilder.group({
      checkinDate: ['', Validators.required],
      checkoutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    if(this.reservationForm.valid){
      this.reservationService.createReservation(this.reservationForm.value)
      console.log('submitted');
      this.router.navigate(['/list'])

    }
    
  }
}
