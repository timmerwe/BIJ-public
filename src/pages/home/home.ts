import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';
import * as firebase from 'firebase'

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


    constructor(public navCtrl: NavController, public authData: AuthData) {

  }
  logOut() {
      this.authData.logoutUser().then(() => {
          this.navCtrl.setRoot(Login);
      });
  }

  goToGebruikers(): void {
    this.navCtrl.setRoot(ContactPage);
}

goToKalender(): void {
  this.navCtrl.setRoot(AboutPage);
}

  
}


