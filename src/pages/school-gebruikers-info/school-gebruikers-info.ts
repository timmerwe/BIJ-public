import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';
import * as firebase from 'firebase'

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Signup } from '../signup/signup';
import {SchoolGebruikersOverzichtPage} from '../school-gebruikers-overzicht/school-gebruikers-overzicht';



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

  SchoolGebruikersInfoPage = SchoolGebruikersInfoPage;
  SchoolGebruikersOverzichtPage = SchoolGebruikersOverzichtPage;

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
