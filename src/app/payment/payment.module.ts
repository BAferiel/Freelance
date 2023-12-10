import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddPaymentComponent
  ],
  imports: [
    PaymentRoutingModule,
    CommonModule,
    FormsModule,
  ]
})
export class PaymentModule { }
