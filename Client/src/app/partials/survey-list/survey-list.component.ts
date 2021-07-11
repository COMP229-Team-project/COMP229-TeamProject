import { Component, OnInit } from '@angular/core';
import { PostListService, Post } from 'src/app/post-list.service';

@Component({
  selector: 'survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
})
export class SurveyListComponent implements OnInit {
  //get surveys from service by injecting service into constructor
  posts: Post[];

  //initialize posts property with the data from PostListService
  constructor(public postlist: PostListService) {
    this.posts = postlist.posts;
  }

  ngOnInit(): void {}
}
