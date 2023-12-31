import {Component, OnInit} from '@angular/core';
import {Review} from "../../../models/review.model";
import {ActivatedRoute} from "@angular/router";
import {ReviewServiceService} from "../../../Service/review-service.service";

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit{
  serviceName!:string;
  reviews: Review[] = [];

 constructor(private rs: ReviewServiceService, private route: ActivatedRoute){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serviceName = params['serviceName'];
      this.loadReviews();
    })
  }
  loadReviews() {
    console.log('Service Name:', this.serviceName);
    this.rs.getReviewsByService(this.serviceName).subscribe(data => {
      console.log('Reviews:', data);
      this.reviews = data;
    });
  }

  deleteReview(review: Review) {
    this.rs.deleteReview(review.idReview).subscribe(() => {
      this.reviews = this.reviews.filter((r) => r.idReview !== review.idReview);
    });
  }

  getRatingArray(rating: number): number[] {
    return new Array(rating);
  }


}
