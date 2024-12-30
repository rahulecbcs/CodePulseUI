import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../service/category.service';
import { Subscribable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addcategorySubscription?: Subscription;

  // constructor me Router ko inject kiye, navigation k lie
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.model = {
      name: '',
      UrlHandle: '',
    };
  }

  onFormSubmit() {
    this.addcategorySubscription = this.categoryService
      .addCategory(this.model)
      .subscribe({
        next: (response) => {
          // yahn hame category List pe wapish jana after saving the category
          // router ka use krenge navigation k lie, iske lie pahle hame constructor me inject krna hoga isse pahle

          this.router.navigateByUrl('/admin/categories');

          console.log('this is success');
        },
        error: (error) => {
          console.log('this is failure');
        },
      });
  }
  ngOnDestroy(): void {
    this.addcategorySubscription?.unsubscribe();
  }
}
