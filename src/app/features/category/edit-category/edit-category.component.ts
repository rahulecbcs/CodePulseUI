import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { __param } from 'tslib';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/category.model';
import { UpdateCategoryRequest } from '../models/update-category-request.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  // ek vairable create kiye naam hai id , string type ka jo ki null ho skta hai hai, aur default value null hai
  id: string | null = null;
  category? : Category;
  paramsSubscrition?: Subscription;
  editCategorySubscrition?: Subscription;
  //hum route ko accept krenge yhn jo ki service injected hoga, iske lie constructor me route inject kr denge
  //iske baad hum isko use kr skte hai ngInit lifeCycle me

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router : Router) {}

  // here we define OnInit
  ngOnInit(): void {
    // yahan hum route pramaeter k value ko read kr lenge
    this.paramsSubscrition = this.route.paramMap.subscribe({
      next: (params) => {
        //yahn hum id nikal rahe hai url se,
        this.id = params.get('id');
        //id hme pta hai, next hum data fetch karenge API se, iske liye ek service method bana log, wo karega fetch, go to the Service folder
        // aur wahan ek new method define karo getCategory by id. 

        if(this.id){
          //get the data from the API for this Category id
          this.categoryService.getCategoryById(this.id).subscribe({
            next: (response) => {
              this.category = response;

            }
          })

        }
      },
    });
    //bcz this is subscriptions its good practice to destroy the subscription
  }

  //yahn hum onFormSubmit ek method create krenge jo ki edit category form k save pe run hoga
  //onFormSubmit ye ek method hai jo void return kar raha hai
  onFormSubmit() : void {
   const updateCategoryRequest : UpdateCategoryRequest = {
    name : this.category?.name ?? '',
    urlHandle : this.category?.UrlHandle ?? ''

   }
   if(this.id) {
    //pass this object to the service 
   this.editCategorySubscrition = this.categoryService.updateCategory(this.id,updateCategoryRequest).subscribe({
      next: (response) => {
          this.router.navigateByUrl('/admin/categories');
      }
    })
  
  }
    }

    onDelete(): void {
      //jab id defined hoga tavi hum delete service ko use krne wale hai
      if(this.id){
        this.categoryService.deleteCategory(this.id).subscribe({
          next: (response)  =>{
            this.router.navigateByUrl('/admin/categories');
          }
        })
      }
    }

  ngOnDestroy(): void {
    //on desroy pe hamre subscription ko unsubsribe kr dega. ye performance badhayega or memory leak se bachayega
    this.paramsSubscrition?.unsubscribe();
    this.editCategorySubscrition?.unsubscribe();
  }
}
