import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicefarahRoutingModule } from './servicefarah-routing.module';
import { ListserviceComponent } from './listservice/listservice.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { FormsModule } from '@angular/forms';
import { ListReviewComponent } from './Reviews/list-review/list-review.component';
import { AddReviewComponent } from './Reviews/add-review/add-review.component';


@NgModule({
  declarations: [
    ListserviceComponent,
    AddserviceComponent,
    ListReviewComponent,
    AddReviewComponent
  ],
  imports: [
    CommonModule,
    ServicefarahRoutingModule,
    FormsModule
  ]
})
export class ServicefarahModule { }
