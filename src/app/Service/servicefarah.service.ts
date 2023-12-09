import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../models/servicefar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicefarahService {

  constructor(private _http:HttpClient) { }
  addServiceFromDb(service:Service):Observable<Service>{
    return this._http.post<Service>("http://localhost:8083/ServiceE",service)
  }
  getServiceFromDB():Observable<Service[]>{
    return this._http.get<Service[]>("http://localhost:8083/ServiceE/getallservice");
  }
  Updateservice(service:Service):Observable<Service>{
    return this._http.put<Service>("http://localhost:8083/ServiceE",service);
  }
  deleteServiceFromDb(idservice:number):Observable<void>{
    return this._http.delete<void>("http://localhost:8083/ServiceE/"+idservice);
  }
}
