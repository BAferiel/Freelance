import { Component } from '@angular/core';
import {Review} from "../../../models/review.model";
import {ReviewServiceService} from "../../../Service/review-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {

  review: Review = new Review();
  isReviewAdded: boolean =false;

  constructor(private rs:ReviewServiceService, private router: Router){}

  addReview(){
    this.rs.addReview(this.review).subscribe(() =>
    {
    this.showSuccessMessageAndNavigate("Review Added")
    })

  }
  showSuccessMessageAndNavigate(action: string) {
    this.isReviewAdded = true;

    setTimeout(() => {
      this.isReviewAdded = false;
      this.router.navigate(['service/reviews']);
    }, 2000);
  }
}
