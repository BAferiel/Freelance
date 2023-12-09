import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListserviceComponent } from './listservice/listservice.component';
import { AddserviceComponent } from './addservice/addservice.component';
import {ListReviewComponent} from "./Reviews/list-review/list-review.component";
import {AddReviewComponent} from "./Reviews/add-review/add-review.component";

const routes: Routes = [
  {
    path:'list',
    component:ListserviceComponent
  },
  {
    path:'addservice',
    component:AddserviceComponent
  },
  {
    path:'reviews',
    component:ListReviewComponent
  },
  {
    path:'addreview',
    component:AddReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicefarahRoutingModule { }
