import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss'],
})
export class GallerySectionComponent implements OnInit {

  readonly imagePath = 'assets/images/';

  readonly description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, laboriosam!';

  readonly gallery = [
    {
      image: 'g-1.jpg',
      title: 'amazing places',
      desc: this.description
    },
    {
      image: 'g-2.jpg',
      title: 'amazing places',
      desc: this.description
    },
    {
      image: 'g-3.jpg',
      title: 'amazing places',
      desc: this.description
    },
    {
      image: 'g-4.jpg',
      title: 'amazing places',
      desc: this.description
    },
    {
      image: 'g-5.jpg',
      title: 'amazing places',
      desc: this.description
    },
    {
      image: 'g-6.jpg',
      title: 'amazing places',
      desc: this.description
    },
    {
      image: 'g-7.jpg',
      title: 'amazing places',
      desc: this.description
    },
    {
      image: 'g-8.jpg',
      title: 'amazing places',
      desc: this.description
    },
    {
      image: 'g-9.jpg',
      title: 'amazing places',
      desc: this.description
    },
  ];

  constructor() { }

  ngOnInit() { }

}
