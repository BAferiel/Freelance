import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { AddcommandeComponent } from './addcommande/addcommande.component';
import { FormsModule } from '@angular/forms';
import { ListcommandeComponent } from './listcommande/listcommande.component';


@NgModule({
  declarations: [
    AddcommandeComponent,
    ListcommandeComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    FormsModule
  ]
})
export class CommandeModule { }
