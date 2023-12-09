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
    return this._http.post<Service>("http://localhost:8083/ServiceE",service);
  }
  getServiceFromDB():Observable<Service[]>{
    return this._http.get<Service[]>("http://localhost:8083/ServiceE/getallservice");
  }
  getservicebyid(idService:number):Observable<Service>{
    return this._http.get<Service>("http://localhost:8083/ServiceE/getServiceByid/"+idService)
  }
  Updateservice(idService:number,service:Service):Observable<Service>{
    return this._http.put<Service>("http://localhost:8083/ServiceE/"+idService,service);
  }
  deleteServiceFromDb(idService:number):Observable<String>{
    return this._http.delete("http://localhost:8083/ServiceE/"+idService, {responseType:'text'});
  }
  removeService(idService:number) : Observable<Service>{
    return this._http.delete<Service>('http://localhost:8083/ServiceE/'+idService);
  }
}
