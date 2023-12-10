import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/Service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category = new Category();
  isFormConnected: boolean = false; // Track form connection status

  @ViewChild('f') form!: NgForm;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void { }

  saveCategory() {
    if (this.form.valid ) {
      this.categoryService.addCategory(this.category).subscribe(
        data => {
          console.log(data);
          this.goToCategoryList();
        },
        error => console.log(error)
      );
    } 
  }

  goToCategoryList() {
    this.router.navigate(['/category/listcategory']);
  }
  onSubmit() {
    this.saveCategory();
    
  }

  
}
