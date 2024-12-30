import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import {BlobpostListComponent} from './features/blob-post/blobpost-list/blobpost-list.component';
import {AddBlogpostComponent} from './features/blob-post/add-blogpost/add-blogpost.component';



const routes: Routes = [
  {
    path: 'admin/categories',
    component: CategoryListComponent
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
  },
  //yahn pe Categaory List page pe jo edit link hai, uske lie routing define kiye hai
  ///admin/categories/:id- :id ka mtabl hai aap Id as a input loge route me
  {
    path: 'admin/categories/:id',
    //iska mtable hota hai which component you want to load, EditCategoryComponent ye edit-category folder me edit-category.component.ts hai,
    //jab v koe given path pe click krega tab edit-category.component.ts me jayega request
    component: EditCategoryComponent
  },
  {
    path: 'admin/blobposts',
    //when someone reach to this path we have to load below component
    component: BlobpostListComponent
  },
  {
    path: 'admin/blogpost/add',
    //when someone reach to this path we have to load below component
    component: AddBlogpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
