import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-image-box',
  templateUrl: './gallery-image-box.component.html',
  styleUrls: ['./gallery-image-box.component.scss'],
})
export class GalleryImageBoxComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  image: string;

  constructor() { }

  ngOnInit() { }

}
