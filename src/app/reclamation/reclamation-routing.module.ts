import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreclamationComponent } from './addreclamation/addreclamation.component';
import { ListreclamationComponent } from './listreclamation/listreclamation.component';


const routes: Routes = [
  {
    path:"addreclamation",
    component:AddreclamationComponent
  },
  {
    path:"listreclamation",
    component:ListreclamationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
