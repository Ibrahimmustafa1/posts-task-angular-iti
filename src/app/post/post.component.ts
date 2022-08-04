import { Component, Input, OnInit } from '@angular/core';
import { Iposts } from '../iposts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Iposts | undefined;
  constructor() {}

  ngOnInit(): void {}
}
