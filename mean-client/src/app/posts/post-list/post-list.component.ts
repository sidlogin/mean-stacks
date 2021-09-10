import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../post.service';
import { Post } from '../post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postService: PostsService) {
    this.posts$ = this.postService.getUpdatedPosted();
  }

  ngOnInit() {
  }

}
