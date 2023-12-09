import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcommandeComponent } from './addcommande/addcommande.component';
import { ListcommandeComponent } from './listcommande/listcommande.component';

const routes: Routes = [
  {
    path:'addcommande',component:AddcommandeComponent
  },
  {
    path:'listcommande',component:ListcommandeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
