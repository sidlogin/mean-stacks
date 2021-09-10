import { Post } from './post.model';
import { Subject } from 'rxjs'

export class PostsService {
    private posts: Post[] = [];
    private setUpdatedPosted = new Subject<Post[]>();

    getPosts() {
      return [...this.posts];
    }

    getUpdatedPosted() {
      return this.setUpdatedPosted.asObservable();
    }

    addPosts(title: string, content: string) {
      const post: Post = {
        title: title, content: content
      };
      this.posts.push(post);
      this.setUpdatedPosted.next([...this.posts])
      console.log([...this.posts])
    }
}
