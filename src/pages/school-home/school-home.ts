import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';
import * as firebase from 'firebase'

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Signup } from '../signup/signup';



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

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthData) {
  }

  logOut() {
    this.authData.logoutUser().then(() => {
        this.navCtrl.setRoot(Login);
    });
}

}
