import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from './models/relclamation.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }
  registerUser(reclamation: Reclamation): Observable<Reclamation> {
		return this.http.post<Reclamation>(
			'http://localhost:8080/mon-application/auth/addNewUser',reclamation
			
		);
    
	}
}
