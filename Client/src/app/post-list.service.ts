import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostListService {
  posts: Post[] = [
    {
      description:
        'Ever wonder what kind of dog you would be? Answer this quiz and find out!',
      title: 'What Kind Of Dog Are You?',
    },
    {
      description:
        'Ever wonder what kind of dog you would be? Answer this quiz and find out!',
      title: 'What Kind Of Dog Are You?',
    },
    {
      description:
        'Ever wonder what kind of dog you would be? Answer this quiz and find out!',
      title: 'What Kind Of Dog Are You?',
    },
    {
      description:
        'Ever wonder what kind of dog you would be? Answer this quiz and find out!',
      title: 'What Kind Of Dog Are You?',
    },
  ];
  constructor() {}
}
