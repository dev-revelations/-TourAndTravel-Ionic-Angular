import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent implements OnInit, AfterViewInit {

  @Input()
  text: string;

  wordList = [];

  constructor() { }

  ngAfterViewInit(): void {
    if (this.text) {
      const words = this.text.split(' ')
        .filter(value => value.replace(/\s/g, '').length !== 0);
      this.wordList = words.map(value => value.split(''));
    }
  }

  ngOnInit() { }

}
