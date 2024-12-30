import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  /*
  --------First Approach-----Get All categories service in component----------- 
  -- ek varibale create kiye subscribe k response ko save krne k lie
  categories?: Category[];

   --category sarvice se hame all categories list fetch krna hoga iske liye hame constructor me usse pahle  inject krna hoga
   constructor() likh kr banate hai constructor
  --abb service ko inject kro () me
   private hai, name hai aur wo CategoryService Type ka hai

  constructor(private categoryService: CategoryService) {}

  -- categoryService isko ng on init me, use kr k deta fetch karna hoga, but ye ng core me implemeted hai
  ngOnInit(): void {
    injected categoryService se hum all category list nikala hai
    --getAllCategories() ye Observable return kar raha hai islie, aur Observable koe v value  directly pass nhi karta hai, isliye usse subscribe karna hoga pahle, async pipe v ek alag method hai observable ko subscribe krne k lie
    this.categoryService.getAllCategories().subscribe(
      -- subscribe method k pass ek boject hai {}
      {
        -- subscribe have next and response such that, then waht happend to that response => {}
        next: (Response) => {
          -- ek varibale me hum respons ko store kr lenge
          this.categories = Response;
        },
      }
    );
  }
  ----------------------------------------------------------------------  
 */
  // 2nd approach to get the all categories service to the component-- By using Async Pipe

  // ek Obserbebale varibale create kiye subscribe k response ko save krne k lie, $ se Observeble array ko denote karte hai, Yeh Observable type ka hai jo Category [] ko hold krega
  // ? - iska matlb hai, it can be undefined
  categories$?: Observable<Category[]>;

  //category sarvice se hame all categories list fetch krna hoga iske liye hame constructor me usse pahle  inject krna hoga
  //constructor() likh kr banate hai constructor
  //abb service ko inject kro () me
  //private hai, name hai aur wo CategoryService Type ka hai

  constructor(private categoryService: CategoryService) {}

  // categoryService isko ng on init me, use kr k deta fetch karna hoga, but ye ng core me implemeted hai
  ngOnInit(): void {
    // injected categoryService se hum all category list nikala hai
    //getAllCategories() ye Observable return kar raha hai islie, aur Observable koe v value  directly pass nhi karta hai, isliye usse subscribe karna hoga pahle,
    //async pipe v ek alag method hai observable ko subscribe krne k lie

    this.categories$ = this.categoryService.getAllCategories();
  }
}
