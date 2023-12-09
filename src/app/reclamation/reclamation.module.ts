import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { AddreclamationComponent } from './addreclamation/addreclamation.component';
import { FormsModule } from '@angular/forms';
import { ListreclamationComponent } from './listreclamation/listreclamation.component';


@NgModule({
  declarations: [
    AddreclamationComponent,
    ListreclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    FormsModule
    
  ]
})
export class ReclamationModule { 
}
