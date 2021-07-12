import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  description: string;
  imgURL: string;
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
      imgURL: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    },
    {
      description: 'What Harry Potter character are you most like. Find out!',
      title: 'What Harry Potter Character Are You?',
      imgURL:
        'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/01/Harry-Potter-2.jpg',
    },
    {
      description:
        'What kind of plant would you be? Answer this quiz and find out!',
      title: 'What kind of plant are you?',
      imgURL:
        'https://bloximages.newyork1.vip.townnews.com/heraldmailmedia.com/content/tncms/assets/v3/editorial/8/cc/8ccdc4c4-c5d4-11e9-be6c-ef77279088fe/5d60318dbb6b6.image.jpg?resize=946%2C630',
    },
    {
      description:
        'Ever wonder what kind of dog you would be? Answer this quiz and find out!',
      title: 'What Kind Of Dog Are You?',
      imgURL: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    },
  ];
  constructor() {}
}
