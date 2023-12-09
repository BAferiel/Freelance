import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { AfficheInscriComponent } from './affiche-inscri/affiche-inscri.component';
import { AjoutinscriComponent } from './ajoutinscri/ajoutinscri.component';
import { ModifinscriComponent } from './modifinscri/modifinscri.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AfficheInscriComponent,
    AjoutinscriComponent,
    ModifinscriComponent,
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    FormsModule
  ]
})
export class SubscriptionModule { }
