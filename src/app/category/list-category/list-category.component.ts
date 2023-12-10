import { Component, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; // Import NgForm
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/Service/category.service';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})

export class ListCategoryComponent {
  categorys!: Category[];
  @ViewChild('f') form!: NgForm;
  isFormConnected: boolean = false;
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategoryList();
  }
  private getCategoryList() {
    this.categoryService.getCategortyList().subscribe(data => {
      console.log('data', data)
      this.categorys = data;
    })
  }
  deleteCategory(category: Category) {
  const isConfirmed = confirm('Are you sure you want to delete this category?');
  if (isConfirmed) {
    this.categoryService.removeCategory(category.id_category).subscribe(
      () => {
        this.categorys = this.categorys.filter(e => e.id_category !== category.id_category);
        window.location.reload(); // Reload the page after deletion
      },
      error => {
        console.error('Error during deletion:', error);
      }
    );
  }
}
  onFormConnect() {
    this.isFormConnected = true; // Set form connection status to true
  }
  
}
