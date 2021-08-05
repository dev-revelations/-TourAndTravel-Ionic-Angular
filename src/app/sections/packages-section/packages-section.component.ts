import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages-section',
  templateUrl: './packages-section.component.html',
  styleUrls: ['./packages-section.component.scss'],
})
export class PackagesSectionComponent implements OnInit {

  readonly imagePath = 'assets/images/';
  readonly description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, quos?';

  readonly packageList = [
    {
      title: 'mumbai',
      desc: this.description,
      image: 'p-1.jpg'
    },
    {
      title: 'sydney',
      desc: this.description,
      image: 'p-2.jpg'
    },
    {
      title: 'hawaii',
      desc: this.description,
      image: 'p-3.jpg'
    },
    {
      title: 'paris',
      desc: this.description,
      image: 'p-4.jpg'
    },
    {
      title: 'tokyo',
      desc: this.description,
      image: 'p-5.jpg'
    },
    {
      title: 'egypt',
      desc: this.description,
      image: 'p-6.jpg'
    },
  ];

  constructor() { }

  ngOnInit() { }

}
