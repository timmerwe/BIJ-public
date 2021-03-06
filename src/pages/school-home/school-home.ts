import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';
import * as firebase from 'firebase'

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Signup } from '../signup/signup';
import {SchoolGebruikersInfoPage} from '../school-gebruikers-info/school-gebruikers-info';
import {SchoolGebruikersOverzichtPage} from '../school-gebruikers-overzicht/school-gebruikers-overzicht';
import { SchoolEvenementenOverzichtPage } from '../school-evenementen-overzicht/school-evenementen-overzicht';
import { SchoolEvenementenInfoPage } from '../school-evenementen-info/school-evenementen-info';


/**
 * Generated class for the SchoolHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-school-home',
  templateUrl: 'school-home.html',
})
export class SchoolHomePage {

  SchoolHomePage = SchoolHomePage;
  SchoolGebruikersInfoPage = SchoolGebruikersInfoPage;
  SchoolGebruikersOverzichtPage = SchoolGebruikersOverzichtPage;
  SchoolEvenementenInfoPage = SchoolEvenementenInfoPage;
  SchoolEvenementenOverzichtPage = SchoolEvenementenOverzichtPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthData) {
  }

  logOut() {
    this.authData.logoutUser().then(() => {
        this.navCtrl.setRoot(Login);
    });

    
}

goToInfo(): void {
  this.navCtrl.setRoot(SchoolGebruikersInfoPage);
}

}
