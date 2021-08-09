import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-box',
  templateUrl: './footer-box.component.html',
  styleUrls: ['./footer-box.component.scss'],
})
export class FooterBoxComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  links: Array<{ url: string, text: string }>;

  constructor() { }

  ngOnInit() { }

}
