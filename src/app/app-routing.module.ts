import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'reclamation', loadChildren : () => import('./reclamation/reclamation.module').then(m=>m.ReclamationModule)},
  {
    path:'service',
    loadChildren:() =>
     import('./servicefarah/servicefarah.module').then((u) => u.ServicefarahModule),
  },
  {
    path:'subscription',
    loadChildren:()=>
    import('./subscription/subscription.module').then((s) => s.SubscriptionModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
