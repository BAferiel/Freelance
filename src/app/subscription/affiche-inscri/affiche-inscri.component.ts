import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'src/app/models/subscription';
import { SubscriptionService } from 'src/app/Service/subscription.service';

@Component({
  selector: 'app-affiche-inscri',
  templateUrl: './affiche-inscri.component.html',
  styleUrls: ['./affiche-inscri.component.css']
})
export class AfficheInscriComponent implements OnInit{
  subscriptions!: Subscription[];

  constructor(private subscriptionService: SubscriptionService,
    private router : Router) {}


  ngOnInit(): void{
   this.getSubscriptionList();
  }


  private getSubscriptionList(){
    this.subscriptionService.getSubscriptionList().subscribe(data => {
      this.subscriptions=data;
    })
  }


  DeleteSubscription(subscription: Subscription): void {
    const isConfirmed = confirm('Are you sure you want to delete this subscription?');
    if (isConfirmed) {
      this.subscriptionService.removeSubscription(subscription.id_sub).subscribe(
        () => {
          this.subscriptions = this.subscriptions.filter(e => e.id_sub !== subscription.id_sub);
        },
        error => {
          console.error('Error during deletion:', error);
        }
      );
    }
  }

}
