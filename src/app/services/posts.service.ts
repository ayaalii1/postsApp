import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // ng g s services/nameofservice
// app.module --> HttpClientModule 
// call inside imports in app.module
// serivce 1) url of api / 2) constructor variable http:HttpClient


url = 'https://jsonplaceholder.typicode.com/posts/'
  constructor(private http:HttpClient) { }

  // get all posts
  getPosts(){
    return this.http.get(this.url)
  }
  getSinglePost(id:any){
    return this.http.get(this.url + id)
  }
  addPost(data:any){
    return this.http.post(this.url,data)
  }

  updatePost(id:any,data:any){
    return this.http.patch(this.url + id,data)
  }
  deletePost(id:any){
    // post.id --> id
    // 'https://jsonplaceholder.typicode.com/posts/1'
    return this.http.delete(this.url+id)
  }
}
