import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent implements OnInit {

  readonly branchLinks = [
    {
      url: '#',
      text: 'iran'
    },
    {
      url: '#',
      text: 'USA'
    },
    {
      url: '#',
      text: 'japan'
    },
    {
      url: '#',
      text: 'france'
    },
  ];

  readonly quickLinks = [
    {
      url: '#',
      text: 'home'
    },
    {
      url: '#',
      text: 'book'
    },
    {
      url: '#',
      text: 'packages'
    },
    {
      url: '#',
      text: 'services'
    },
    {
      url: '#',
      text: 'gallery'
    },
    {
      url: '#',
      text: 'review'
    },
    {
      url: '#',
      text: 'contact'
    },
  ];

  readonly socialLinks = [
    {
      url: '#',
      text: 'facebook'
    },
    {
      url: '#',
      text: 'instagram'
    },
    {
      url: '#',
      text: 'twitter'
    },
    {
      url: '#',
      text: 'linkedin'
    },
  ];

  constructor() { }

  ngOnInit() { }

}
