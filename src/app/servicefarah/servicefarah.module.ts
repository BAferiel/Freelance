import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicefarahRoutingModule } from './servicefarah-routing.module';
import { ListserviceComponent } from './listservice/listservice.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListserviceComponent,
    AddserviceComponent
  ],
  imports: [
    CommonModule,
    ServicefarahRoutingModule,
    FormsModule
  ]
})
export class ServicefarahModule { }
