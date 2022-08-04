import { Iposts } from './../iposts';
import { PostsdataService } from './../postsdata.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts!: Iposts[];
  constructor(private _postService: PostsdataService) {}

  ngOnInit(): void {
    this._postService.GetPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
