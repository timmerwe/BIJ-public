import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { Signup } from '../signup/signup';
import { Login } from '../login/login';
import * as firebase from 'firebase';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
  
  constructor(public navCtrl: NavController, public authData: AuthData) {
    this.loadCompanies()

  }

  
  goToHome(): void {
    this.navCtrl.setRoot(HomePage);
}

goToKalender(): void {
  this.navCtrl.setRoot(AboutPage);
}

goToAddKlant(): void {
  this.navCtrl.setRoot(Signup);

}

logOut() {
  this.authData.logoutUser().then(() => {
      this.navCtrl.setRoot(Login);
  });
}



getUserlevel() {
  var userId = firebase.auth().currentUser.uid;
   firebase.database().ref('/userProfile/' + userId).once('value').then(function(snapshot) {
    var userlevel = (snapshot.val() && snapshot.val().userlevel) || 'Anonymous';
    console.log(userlevel);
  })
}

loadCompanies(){
  firebase.database().ref('/companies/').once('value', (snapshot) => {
    let companies = [];
    snapshot.forEach(snap => {
      var info = companies.push(snap.val().school); //or snap.val().name if you just want the name and not the whole object
      console.log(companies);
      var text = document.getElementById("lijst");
      text.insertAdjacentHTML('afterbegin', '<div tabindex="0" class="onclick-menu">'+ snap.val().school +' | '+ snap.val().adres +' &nbsp; &nbsp; ></div><br>');
      return false;
    });
  });
 }

 companyClick(){
  var hoi = document.getElementById("aaa").getAttribute("value");
  console.log(hoi);
 }
}
