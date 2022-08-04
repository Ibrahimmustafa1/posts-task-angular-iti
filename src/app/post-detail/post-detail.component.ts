import { PostsdataService } from './../postsdata.service';
import { Iposts } from './../iposts';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Iposts | undefined;
  constructor(
    private postService: PostsdataService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
    this.postService.GetPostById(id).subscribe((data) => {
      this.post = data;
    });
  }
}
