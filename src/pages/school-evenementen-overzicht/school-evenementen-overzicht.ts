import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';
import * as firebase from 'firebase'

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Signup } from '../signup/signup';
import {SchoolGebruikersOverzichtPage} from '../school-gebruikers-overzicht/school-gebruikers-overzicht';
import { SchoolHomePage } from '../school-home/school-home';
import { SchoolEvenementenInfoPage } from '../school-evenementen-info/school-evenementen-info';
import {SchoolGebruikersInfoPage} from '../school-gebruikers-info/school-gebruikers-info';
import { MaakEvenementPage } from '../maak-evenement/maak-evenement';
import { EditUserPage } from '../edit-user/edit-user';
import { EditEvenementPage } from '../edit-evenement/edit-evenement';
/**
 * Generated class for the SchoolEvenementenOverzichtPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-school-evenementen-overzicht',
  templateUrl: 'school-evenementen-overzicht.html',
})
export class SchoolEvenementenOverzichtPage {
  
  evenementen: any = [];

  SchoolHomePage = SchoolHomePage;
  SchoolGebruikersInfoPage = SchoolGebruikersInfoPage;
  SchoolGebruikersOverzichtPage = SchoolGebruikersOverzichtPage;
  SchoolEvenementenInfoPage = SchoolEvenementenInfoPage;
  SchoolEvenementenOverzichtPage = SchoolEvenementenOverzichtPage;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthData) {
  this.loadEvenementen();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolEvenementenOverzichtPage');
  }
  logOut() {
    this.authData.logoutUser().then(() => {
        this.navCtrl.setRoot(Login);
    });
  
}

maakEvenement() {

  this.navCtrl.setRoot(MaakEvenementPage);

}

loadEvenementen(){
  firebase.database().ref('/event/').once('value', (snapshot) => {
    
    snapshot.forEach(snap => {
       this.evenementen.push(snap.val());
      return false;
    });
  });
 }

 goToEditPage(omschrijving: string, datum: string, beheerder: string){
  this.navCtrl.push(EditEvenementPage, {omschrijving: omschrijving, datum: datum, beheerder: beheerder});
}

}


