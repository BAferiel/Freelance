import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'src/app/models/subscription';
import { SubscriptionService } from 'src/app/Service/subscription.service';

@Component({
  selector: 'app-ajoutinscri',
  templateUrl: './ajoutinscri.component.html',
  styleUrls: ['./ajoutinscri.component.css']
})
export class AjoutinscriComponent implements OnInit{
  subscription: Subscription = new Subscription();

  constructor( private subscriptionservice: SubscriptionService, private router: Router){
  }


  ngOnInit(): void{
    
  }

  saveSubscription(){
    this.subscriptionservice.addSubscription(this.subscription).subscribe(data =>{
      console.log(data);
      this.goToSubList();
    },
    error => console.log(error)
    );
  }


  goToSubList(){
    this.router.navigate(['/affichagesub']);
  }

  onSubmit(){
    console.log(this.subscription);
    this.saveSubscription();
  }

}
