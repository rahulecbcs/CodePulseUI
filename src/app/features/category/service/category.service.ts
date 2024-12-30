import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(
      `${environment.apiBaseUrl}/api/Categories`,
      model
    );
  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${environment.apiBaseUrl}/api/Categories`
    );
  }

  getCategoryById(id: string): Observable<Category>{
    return this.http.get<Category>(
      `${environment.apiBaseUrl}/api/Categories/${id}`
    );
  }

//yahn pe Observable type ka hai updateCategory Method, matalb api issi type value return carega
  updateCategory(id: string, updateCategoryRequest : UpdateCategoryRequest) : Observable<Category> {
  //put ka retun type Category hai because we r getting this back from api
  // put me id k sath sath body v pass krna hota hota hai
    return this.http.put<Category>(
      `${environment.apiBaseUrl}/api/Categories/${id}`, updateCategoryRequest)
  }

  //deleteCategory id as string input lega and whole method Obaservable return karega
  deleteCategory(id:string): Observable<Category>{

    return this.http.delete<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`);

  }
}
