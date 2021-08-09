import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss'],
})
export class HomeSectionComponent implements OnInit {

  readonly videosPath = 'assets/images/';

  readonly videos = [
    'vid-1.mp4',
    'vid-2.mp4',
    'vid-3.mp4',
    'vid-4.mp4',
    'vid-5.mp4'
  ];

  activeIndex = 0

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.activeIndex =
        ++this.activeIndex > this.videos.length-1 ? 0 : this.activeIndex;
    }, 5000);
  }

  setActiveVideo(index) {
    this.activeIndex = index;
  }

  makeVideoSrc(videoIndex): string {
    return `${this.videosPath}${this.videos[videoIndex]}`;
  }

}
