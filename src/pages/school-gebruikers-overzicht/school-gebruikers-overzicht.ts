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
import { SchoolHomePage } from '../school-home/school-home';
import { SchoolEvenementenOverzichtPage } from '../school-evenementen-overzicht/school-evenementen-overzicht';
import { SchoolEvenementenInfoPage } from '../school-evenementen-info/school-evenementen-info';
import { EditUserPage } from '../edit-user/edit-user';




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
  

 users: any = [];

  SchoolHomePage = SchoolHomePage;
  SchoolGebruikersInfoPage = SchoolGebruikersInfoPage;
  SchoolGebruikersOverzichtPage = SchoolGebruikersOverzichtPage;
  SchoolEvenementenInfoPage = SchoolEvenementenInfoPage;
  SchoolEvenementenOverzichtPage = SchoolEvenementenOverzichtPage;

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

  createUser() {

        this.navCtrl.setRoot(UsersSingupPage);

  }

  loadUsers(){
    firebase.database().ref('/mobileUsers/').once('value', (snapshot) => {
      
      snapshot.forEach(snap => {
        this.users.push(snap.val());
        console.log(this.users);
        return false;
      });
    });
   }

   goToEditPage(emailadress: string, code: string, rol: string, leerling: string, geverifieerd: string){
     this.navCtrl.push(EditUserPage, {code: code, emailadress: emailadress, rol: rol, leerling: leerling, geverifieerd: geverifieerd});
   }
   

   

}


