import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  currentImage: String = '../../../assets/banner-girlsunbathing.png';
  currentQuote: String =
    'Creating Surveys helps you understand what important.';
  bannerQuotes: String[] = [
    'Creating surveys helps you learn.',
    'Take surveys created by other users.',
    'Challenge yourself to learn more.',
  ];
  bannerImages: String[] = [
    '../../../assets/banner-girlsunbathing.png',
    '../../../assets/banner-manwithcat.png',
    '../../../assets/banner-girlwithbook.png',
  ];

  intervalID!: any;
  progressINterval!: any;
  progressBarValue: number = 0;
  curSec: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.intervalID = this.SwapBanner();
  }

  SwapBanner(): any {
    let counter = 1;

    let intervalID = setInterval(() => {
      if (counter === 3) {
        counter = 0;
      }
      this.currentImage = this.bannerImages[counter];
      this.currentQuote = this.bannerQuotes[counter];
      counter++;
    }, 5000);

    return intervalID;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }
}
