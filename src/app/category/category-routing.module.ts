import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ModifyCategoryComponent } from './modify-category/modify-category.component';

const routes: Routes = [
  {path:'addcategory',component:AddCategoryComponent},
  {path:'listcategory',component:ListCategoryComponent},
  {path:'modifycategory/:id_cat',component:ModifyCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
