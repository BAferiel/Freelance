import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReclamationModule } from './reclamation/reclamation.module';
import { ServicefarahModule } from './servicefarah/servicefarah.module';
import { SubscriptionModule } from './subscription/subscription.module';
import {CommandeModule} from "./commande/commande.module";
import {PaymentModule} from "./payment/payment.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ReclamationModule,
    ServicefarahModule,
    SubscriptionModule,
    CommandeModule,
    PaymentModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
