import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  goToHome(): void {
    this.navCtrl.setRoot(HomePage);
}

goToKalender(): void {
  this.navCtrl.setRoot(AboutPage);
}

loadAlgemeen(): void {
  var text = document.getElementById("main-info");
  text.insertAdjacentHTML('afterbegin', '<div class="two">two</div>');
}

loadOverzicht(): void {
  var text = document.getElementById("main-info");
  text.insertAdjacentHTML('afterbegin', '<div class="two">two</div>');
}
}
