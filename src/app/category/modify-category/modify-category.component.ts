import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.component.html',
  styleUrls: ['./modify-category.component.css']
})
export class ModifyCategoryComponent implements OnInit {
  category: Category = new Category();
  id_cat: number = 0;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id_cat = this.route.snapshot.params['id_cat'];
    this.categoryService.findCategoryById(this.id_cat).subscribe(data => {
      this.category = data;
    }, error => console.log(error));
  }
  goToCategoryList() {
    this.router.navigate(['/category/listcategory']);
  }
  updateCategory() {
    this.categoryService.updateCategory(this.category, this.id_cat).subscribe(data => {
      console.log(data);
      this.category = new Category();
      this.goToCategoryList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.categoryService.updateCategory(this.category, this.id_cat).subscribe(data => {
      this.goToCategoryList();
    }, error => console.log(error));
  }

}
