import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  //constructor me http client inject karo, tavi usko use kar paoge createBlogPost me. 
  constructor(private http:HttpClient) { }
//ye hamne ek method banaya createBlogPost jo AddBlogPost model type ka data receive karega, add as a result it will
//return Observable jo ki blog-post model type ka hoga
  createBlogPost(data: AddBlogPost) : Observable<BlogPost> {
    //http k post use kiya hai jo ki BlogPost return karega.Url, data dono as a parameter pass hua hai 
    return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/blogposts`, data);
  }
  getAllBlogPosts() : Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/blogposts`);
  }
}
