import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {

  loginFormActive = false;

  @ViewChild('content')
  content: IonContent;

  scrollElement: HTMLElement;

  routeSubscription: Subscription;

  constructor(private menu: MenuController, private route: ActivatedRoute) {
    this.routeSubscription = route.fragment.subscribe(fragment => {
      if (fragment && this, this.scrollElement) {
        this.scrollToFragment(fragment);
        this.menu.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.content.getScrollElement()
      .then(element => {
        element.style.setProperty('scroll-padding', '6rem')
        this.scrollElement = element;
      });
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.menu.close();
  }

  scroll(x, y) {
    this.content.scrollToPoint(x, y, 1000);
  }

  scrollToFragment(fragment: string) {
    const fragmentElement = document.getElementById(fragment);
    const offsetTop = fragmentElement.offsetTop - 35;
    this.scroll(0, offsetTop);
  }

}
