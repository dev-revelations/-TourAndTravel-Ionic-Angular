import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-section',
  templateUrl: './brand-section.component.html',
  styleUrls: ['./brand-section.component.scss'],
})
export class BrandSectionComponent implements OnInit {

  readonly slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      450: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 5
      }
    }
  };

  readonly imagePath = 'assets/images/';

  readonly brands = [
    {
      image: '1.jpg',
    },
    {
      image: '2.jpg',
    },
    {
      image: '3.jpg',
    },
    {
      image: '4.jpg',
    },
    {
      image: '5.jpg',
    },
    {
      image: '6.jpg',
    },
  ];

  constructor() { }

  ngOnInit() { }

}
