import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.scss'],
})
export class ReviewSectionComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  };

  readonly reviewText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error cumque enim nulla tempore nisi
  laboriosam a quod. Quas, totam qui necessitatibus incidunt dolores nisi modi quos? Deleniti eveniet
  repellendus dolore voluptate quibusdam nostrum qui porro consectetur a pariatur praesentium, consequuntur
  debitis quo magnam, vero amet culpa aut tempora voluptates!`;

  readonly imagePath = 'assets/images/';

  readonly reviews = [
    {
      image: 'pic1.png',
      username: 'john deo',
      content: this.reviewText,
    },
    {
      image: 'pic2.png',
      username: 'john deo',
      content: this.reviewText,
    },
    {
      image: 'pic3.png',
      username: 'john deo',
      content: this.reviewText,
    },
    {
      image: 'pic4.png',
      username: 'john deo',
      content: this.reviewText,
    },
  ];

  constructor() { }

  ngOnInit() { }

}
