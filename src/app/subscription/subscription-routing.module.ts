import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficheInscriComponent } from './affiche-inscri/affiche-inscri.component';
import { AjoutinscriComponent } from './ajoutinscri/ajoutinscri.component';
import { ModifinscriComponent } from './modifinscri/modifinscri.component';
const routes: Routes = [
  {path : 'affichagesub',component:AfficheInscriComponent},
  {path : 'ajoutsub',component:AjoutinscriComponent},
  {path : 'modifBloc/:id_sub', component:ModifinscriComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
