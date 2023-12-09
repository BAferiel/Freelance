import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../models/servicefar';
import { Observable } from 'rxjs';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor( private _http:HttpClient) { }

  addCommandeFromDb(commande:Commande):Observable<Commande>{
    return this._http.post<Commande>("http://localhost:8088/Commande",commande);
  }
  getCommandeFromDb():Observable<Commande[]>{
    return this._http.get<Commande[]>("http://localhost:8088/Commande/getAllCommande");
  }

  updateCommandeFromDb(idCommande:number,commande:Commande):Observable<Commande>{
    return this._http.put<Commande>("http://localhost:8088/Commande/"+idCommande,commande);
  }

  deleteCommandeFromDb(idCommande:number):Observable<void>{
    return this._http.delete<void>("http://localhost:8088/Commande/"+idCommande);
  }

 
}
