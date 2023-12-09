import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Review} from "../models/review.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {

  constructor(private http: HttpClient) { }


  getReviewsByService(serviceName: string): Observable<Review[]> {
    return this.http.get<Review[]>
    (`http://localhost:8084/review/getReviewsByService?service=${serviceName}`);
  }

  deleteReview(idReview:number):Observable<void>{
    return this.http.delete<void>("http://localhost:8084/review/deleteReview/"+idReview);

  }

  addReview(review: Review):Observable<Review>{
    return this.http.post<Review>("http://localhost:8084/review/addReview",review);
  }
}
