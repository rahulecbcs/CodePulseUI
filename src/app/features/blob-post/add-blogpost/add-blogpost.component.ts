import { Component, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Title } from '@angular/platform-browser';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/service/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../category/models/category.model';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnInit {
  //Add clogpost wale form me jo multiselect dropdown hai usme values issi variable se aayega
  categories$?: Observable<Category[]>; 
  
  //hamne ek variable model banaya jo AddBlogPost type ka hai. isko hum constructor me initialize kiya hai, yhi form me value contain kar k rakhta hai
  model: AddBlogPost;

  //koe v services agar hmko use karna ho toh pahle usse iss constructor me inject karna padega, 
  //chalo BlogPostService ko inject kar lete hai. private hmara variable ka naam blogPostService hai jo ki BlogPostService type ka hai
  constructor(private blogPostService: BlogPostService, private router : Router, private categoryService : CategoryService ){
    this.model={
      title:'',
      shortDescription:'',
      urlHandle:'',
      content:'',
      featuredImageUrl:'',
      author:'',
      isVisible:true,
      publishedDate: new Date(),
      categories: [] // isko empty array se intialize kiya hai
    }
 
  }
  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();  
  }
  //ek method hai jo void return kar raha hai
  onFormSubmit(): void {
      this.blogPostService.createBlogPost(this.model)
      .subscribe({
        next : (response) => {
          this.router.navigateByUrl('admin/blobposts');
        }
      });
  }


}
