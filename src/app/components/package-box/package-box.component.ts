import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-box',
  templateUrl: './package-box.component.html',
  styleUrls: ['./package-box.component.scss'],
})
export class PackageBoxComponent implements OnInit {

  @Input()
  title;

  @Input()
  image;

  constructor() { }

  ngOnInit() { }

}
