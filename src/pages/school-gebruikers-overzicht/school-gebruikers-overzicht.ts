import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';
import * as firebase from 'firebase'

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Signup } from '../signup/signup';
import {SchoolGebruikersInfoPage} from '../school-gebruikers-info/school-gebruikers-info';
import { UsersSingupPage } from '../users-singup/users-singup';



/**
 * Generated class for the SchoolGebruikersOverzichtPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-school-gebruikers-overzicht',
  templateUrl: 'school-gebruikers-overzicht.html',
})
export class SchoolGebruikersOverzichtPage {

  SchoolGebruikersInfoPage = SchoolGebruikersInfoPage;
  SchoolGebruikersOverzichtPage = SchoolGebruikersOverzichtPage;
  UsersSingupPage = UsersSingupPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthData) {
    this.loadUsers()

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolGebruikersOverzichtPage');
  }

  logOut() {
    this.authData.logoutUser().then(() => {
        this.navCtrl.setRoot(Login);
    });
  }

  users() {

        this.navCtrl.setRoot(UsersSingupPage);

  }

  loadUsers(){
    firebase.database().ref('/mobileUsers/').once('value', (snapshot) => {
      let users = [];
      snapshot.forEach(snap => {
        var info = users.push(snap.val().emailadress); //or snap.val().name if you just want the name and not the whole object
        console.log(users);
        var text = document.getElementById("lijst");
        text.insertAdjacentHTML('afterbegin', '<div tabindex="0" class="onclick-menu">'+ snap.val().emailadress +'<ul class="onclick-menu-content"><li>Userlevel: '+ snap.val().geverifieerd +'</li></ul></div><br>');
        return false;
      });
    });
   }

   

}


