import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/interfaces/postInterface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  // Activated route --> snapshot (id)
  // Router --> navigateByUrl (navigation)
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id: string = this.route.snapshot.params['id'];
  post: Posts = {};
  // [(ngModel)]="post.title"
  getSinglePost() {
    this.postService.getSinglePost(this.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.post = res;
      },
      error: (httpError: any) => {
        console.log(httpError);
      },
    });
    // console.log(this.id)
  }
  back() {
    this.router.navigateByUrl('posts');
  }

  ngOnInit(): void {
    this.getSinglePost();
  }
}
