import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionService } from 'src/app/Service/subscription.service';
import { Subscription } from 'src/app/models/subscription';

@Component({
  selector: 'app-modifinscri',
  templateUrl: './modifinscri.component.html',
  styleUrls: ['./modifinscri.component.css']
})
export class ModifinscriComponent implements OnInit{
  subscription: Subscription = new Subscription();

  id_sub : number=0;

  constructor(private subscriptionervice: SubscriptionService, private route : ActivatedRoute, private router: Router){}


  ngOnInit(): void {
    this.id_sub = this.route.snapshot.params["id_sub"];
    this.subscriptionervice.findSubscriptionById(this.id_sub).subscribe(data =>{
      this.subscription = data;
    },error => console.log(error));
  }

  goToSubList(){
    this.router.navigate(['/affichagesub']);
  }


  updateSubscriptions(){
    this.subscriptionervice.updateSubscription(this.subscription,this.id_sub).subscribe(data =>{
      console.log(data);
      this.subscription = new Subscription();
      this.goToSubList();
    },error =>console.log(error));
    
  }


  onSubmit(){
    this.subscriptionervice.updateSubscription(this.subscription,this.id_sub).subscribe(data =>{
      this.goToSubList();
    }, error => console.log(error));
  }
}
