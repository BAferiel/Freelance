import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { FormsModule } from '@angular/forms';
import { ModifyCategoryComponent } from './modify-category/modify-category.component';

@NgModule({
  declarations: [
    AddCategoryComponent,
    ListCategoryComponent,
    ModifyCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ]
})
export class CategoryModule { }
