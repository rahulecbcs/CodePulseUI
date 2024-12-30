import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-blobpost-list',
  templateUrl: './blobpost-list.component.html',
  styleUrls: ['./blobpost-list.component.css']
})
export class BlobpostListComponent implements OnInit {
  //ye ek variable hai jo ki observable type ka hai, ? ka matable hai Undefined v ho skta hai 
  blogPosts$? : Observable<BlogPost[]>;

  /**
   *
   */
  constructor( private blogPostService : BlogPostService) {
    
    
  }
  ngOnInit(): void {
    // here we will get all blog post from api
    this.blogPosts$ = this.blogPostService.getAllBlogPosts();

  }
  

}
