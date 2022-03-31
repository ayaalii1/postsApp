import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/postInterface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostsService) { }
  posts:Posts[] = []

  getPosts(){
    // httpRequest --> Observable 2 possiblites data / error
    // Observable --> lazy load --> subscribe handle / control / communicate observable
   // subscribe (next) --> everything was done successfully
   // error() --> wrong
    this.postService.getPosts().subscribe({
      next:(res:any)=>{
        this.posts = res
        console.log(res)
      },
      error:(httpError:any)=>{
        console.log(httpError)
      }
    })
  }

  addPostForm(post:any){
    console.log(post)
   this.postService.addPost(post).subscribe({
     next:()=>{
       this.posts.splice(0,0,post)
     }
   })
  }
  deletePost(id:any,i:any){
    // id --> post.id
    this.postService.deletePost(id).subscribe({
      next:()=>{
        console.log('Deleted')
        this.posts.splice(i,1)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getPosts()
  }

}
