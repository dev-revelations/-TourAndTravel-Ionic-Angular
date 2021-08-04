import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output()
  loginClick: EventEmitter<any> = new EventEmitter();

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
