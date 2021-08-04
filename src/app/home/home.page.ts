import { Component, HostListener } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginFormActive = false;

  constructor(private menu: MenuController) { }

  @HostListener('window:resize')
  onWindowResize() {
    this.menu.close();
  }

}
