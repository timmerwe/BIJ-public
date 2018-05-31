import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  goToHome(): void {
    this.navCtrl.setRoot(HomePage);
}

goToGebruikers(): void {
  this.navCtrl.setRoot(ContactPage);
}
}
