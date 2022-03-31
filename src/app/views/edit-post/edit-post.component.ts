import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/interfaces/postInterface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private postService:PostsService,private route:ActivatedRoute,private router:Router) { }
  id:string = this.route.snapshot.params['id']
  post:Posts = {}

  getSinglePost(){
    this.postService.getSinglePost(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.post = res
      },
      error:(err:any) =>{
        console.log(err)
      }
    })
  }

  editPostForm(post:any){
    this.postService.updatePost(this.id,post).subscribe({
      next:() =>{
        console.log(post)
        this.router.navigateByUrl('posts')
      }
    })

  }

  ngOnInit(): void {
    this.getSinglePost()
  }

}
