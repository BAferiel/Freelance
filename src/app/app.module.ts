import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReclamationModule } from './reclamation/reclamation.module';
import { ServicefarahModule } from './servicefarah/servicefarah.module';
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReclamationModule,
    ServicefarahModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
