import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent implements OnInit {

  readonly description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate optio sint doloribus ullam id quod fuga veniam soluta debitis.';

  readonly serviceList = [
    {
      icon: 'fa-hotel',
      title: 'affordable hotels',
      desc: this.description
    },
    {
      icon: 'fa-utensils',
      title: 'food and drinks',
      desc: this.description
    },
    {
      icon: 'fa-bullhorn',
      title: 'safty guide',
      desc: this.description
    },
    {
      icon: 'fa-globe-asia',
      title: 'around the world',
      desc: this.description
    },
    {
      icon: 'fa-plane',
      title: 'fastest-travel',
      desc: this.description
    },
    {
      icon: 'fa-hiking',
      title: 'adventures',
      desc: this.description
    },
  ];

  constructor() { }

  ngOnInit() { }

}
