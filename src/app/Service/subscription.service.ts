import { Injectable } from '@angular/core';
import { Subscription } from '../models/subscription';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getSubscriptionList(): Observable<Subscription[]>{
    return this.httpClient.get<Subscription[]>('http://localhost:8086/subscription/getAllSubscription');
  }

  addSubscription(subscription: Subscription): Observable<Object>{
    return this.httpClient.post('http://localhost:8086/subscription',subscription);
  }

  updateSubscription(subscription: Subscription, id_sub:number): Observable<Subscription>{
    return this.httpClient.put<Subscription>('http://localhost:8086/subscription/'+id_sub,subscription);
  }
  
  findSubscriptionById(id_sub:number) : Observable<Subscription>{
    return this.httpClient.get<Subscription>('http://localhost:8086/subscription/getSubscriptionById/'+id_sub);
  }

  removeSubscription(id_sub:number) : Observable<Subscription>{
    return this.httpClient.delete<Subscription>('http://localhost:8086/subscription/'+id_sub);
  }
}
