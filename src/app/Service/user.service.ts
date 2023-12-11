import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private keycloakUrl = 'http://localhost:8080/realms/MohsenRealm/protocol/openid-connect/token';
  private token !: any;
  
  constructor( private httpClient: HttpClient) { 
  
  }
  
  login(username: string, password: string): Observable<any> { {
    const body = new URLSearchParams({
      'client_id': 'MohsenApiRest',
      'grant_type': 'password',
      'client_secret': 'sS07dulIhVRf4A2ekDHFPXJlnnY8eYgp',
      'username': username,
      'password': password,
    });
  
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      // Add additional headers if needed
    });

  return this.httpClient.post(this.keycloakUrl, body.toString(), { headers: headers });
    }
  }
  

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  clearToken(): void {
    this.token = null;
  }

}
