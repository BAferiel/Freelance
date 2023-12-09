import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListserviceComponent } from './listservice/listservice.component';
import { AddserviceComponent } from './addservice/addservice.component';

const routes: Routes = [
  {
    path:'list',
    component:ListserviceComponent
  },
  {
    path:'addservice',
    component:AddserviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicefarahRoutingModule { }
