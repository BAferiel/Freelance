import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private amountSource = new BehaviorSubject<number | undefined>(undefined);
  currentAmount = this.amountSource.asObservable();

  updateAmount(amount: number) {
    this.amountSource.next(amount);

  }
}
