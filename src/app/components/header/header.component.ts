import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  searchbarActive = false;

  constructor() { }

  ngOnInit() { }

  toggleSearchBar() {
    this.searchbarActive = !this.searchbarActive;
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.searchbarActive = false;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.searchbarActive = false;
  }

}
