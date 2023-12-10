import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPaymentComponent} from "./add-payment/add-payment.component";

const routes: Routes = [
  {
    path:'payment',
    component: AddPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
