import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Reclamation } from '../models/relclamation.model';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }
  addReclamation(reclamation: Reclamation): Observable<Reclamation> {
		return this.http.post<Reclamation>(
			'http://localhost:8082/reclamations',reclamation
			
		);
    
	}
	getReclamations():Observable<Reclamation[]>{
		return this.http.get<Reclamation[]>("http://localhost:8082/reclamations/getAllReclamations");
	  }

	  UpdateReclamation(id_r: number, reclamation: Reclamation): Observable<Reclamation> {
		return this.http.put<Reclamation>('http://localhost:8082/reclamations/'+id_r, reclamation);
	  }
	  
	  deleteReclamation(id_r:number):Observable<String>{
		return this.http.delete("http://localhost:8082/reclamations/"+id_r, {responseType:'text'});
	  }
}
