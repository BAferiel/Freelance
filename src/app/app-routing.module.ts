import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPaymentComponent} from "./payment/add-payment/add-payment.component";
import {AuthGuard} from "./welcome/guard/auth.guard";

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
  },
  {
    path:'commande',
    loadChildren:() =>
      import('./commande/commande.module').then((c) => c.CommandeModule),
  }
  ,{
    path:'category',
    loadChildren:() =>
      import('./category/category.module').then((category) => category.CategoryModule),
  },
  {
   path: 'payment', component: AddPaymentComponent
  },
  {
    path:'user',
    loadChildren:() =>
      import('./login/login.module').then((u) => u.LoginModule),
  },
  {
    path:'welcome',
    loadChildren:() =>
      import('./welcome/welcome.module').then((u) => u.WelcomeModule,
      //, canActivate: [AuthGuard]// ),
    ),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
