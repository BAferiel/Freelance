import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import { PaymentService } from "../../Service/payment.service";

declare var Stripe: any;

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  @ViewChild('cardElement') cardElement: ElementRef;
  private stripe: any;
  paymentSuccess = false;
  paymentError: string | null = null;
  amount: number | undefined;
  selectedPaymentMethod: string = 'card';
  userCardNumber: string | undefined;


  constructor(private router:Router , private http: HttpClient, private route: ActivatedRoute, private paymentService: PaymentService) {
    this.cardElement = {} as ElementRef;
  }

  ngOnInit() {
    this.stripe = Stripe('pk_test_51OLb5WD8x9Pegs6Gf0W7VpeTll3Ct2u47opkq3pcqUtkk9MURyAIiTPipjZ6iDn12gN1JJtvbpEhtbBnO5icrShA00at0YWouR');
    this.paymentService.currentAmount.subscribe(amount => {
      this.amount = amount;
      console.log('Received Amount:', this.amount);
    });
  }

  async handlePayment() {
    const description = 'success';
    const currency = 'usd';
    const paymentRequest = {
      amount: this.amount,
      description,
      currency,
      payment_method: {
        method: this.selectedPaymentMethod,
        card: this.userCardNumber || this.cardElement.nativeElement,
      },
    };

    try {
      const response = await this.http.post<any>('http://localhost:3000/payment/process-payment', paymentRequest).toPromise();
      console.log('done')
      this.paymentSuccess = true;
      setTimeout(() => {
        this.router.navigate(['/listcommande']);
      }, 2000);  // 2000 milliseconds (2 seconds) delay
      if (response.error) {
        this.paymentError = response.error.message;
        return;
      }
    } catch (error) {
      console.error('Payment Error:', error);
      this.paymentError = 'An unexpected error occurred.';
    }

  }


}
