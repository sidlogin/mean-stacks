import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';

import { Post } from '../post.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  posts: Post[] = [];
  enteredTitle = '';
  enteredContent = '';

  constructor(private postService: PostsService) { }

  ngOnInit(): void {}

  onAddPost(form: NgForm) {
    console.log('newPost1: ', form);
    if (form.invalid) {
      return;
    }
    this.postService.addPosts(form.value.title, form.value.content);
    // form.reset();
  }

}
