import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';
import * as firebase from 'firebase'

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Signup } from '../signup/signup';
import {SchoolGebruikersOverzichtPage} from '../school-gebruikers-overzicht/school-gebruikers-overzicht';
import { SchoolEvenementenOverzichtPage } from '../school-evenementen-overzicht/school-evenementen-overzicht';
import { SchoolEvenementenInfoPage } from '../school-evenementen-info/school-evenementen-info';
import { SchoolHomePage } from '../school-home/school-home';

/**
 * Generated class for the SchoolGebruikersInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-school-gebruikers-info',
  templateUrl: 'school-gebruikers-info.html',
})
export class SchoolGebruikersInfoPage {

  SchoolHomePage = SchoolHomePage;
  SchoolGebruikersInfoPage = SchoolGebruikersInfoPage;
  SchoolGebruikersOverzichtPage = SchoolGebruikersOverzichtPage;
  SchoolEvenementenInfoPage = SchoolEvenementenInfoPage;
  SchoolEvenementenOverzichtPage = SchoolEvenementenOverzichtPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolGebruikersInfoPage');
  }

  logOut() {
    this.authData.logoutUser().then(() => {
        this.navCtrl.setRoot(Login);
    });
  }

}
