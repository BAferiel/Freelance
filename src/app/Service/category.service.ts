import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8085/category';
  constructor(private httpClient: HttpClient) { }
   getCategortyList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiUrl}/getAllCategories`);
  }

   addCategory(category: Category): Observable<Object> {
    return this.httpClient.post(`${this.apiUrl}`, category);
  }

  updateCategory(category: Category, id_cat: number): Observable<Category> {
    return this.httpClient.put<Category>(`${this.apiUrl}/${id_cat}`, category);
  }

  findCategoryById(id_cat: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.apiUrl}/getCategoryById/${id_cat}`);
  }

  removeCategory(id_cat: number): Observable<Category> {
    return this.httpClient.delete<Category>(`${this.apiUrl}/${id_cat}`);
  }
}
