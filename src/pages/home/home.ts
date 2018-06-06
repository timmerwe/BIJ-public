import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';
import * as firebase from 'firebase'

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Signup } from '../signup/signup';
import { SchoolHomePage } from '../school-home/school-home';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  

    constructor(public navCtrl: NavController, public authData: AuthData) {
      var user = firebase.auth().currentUser;
      if(user){
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
        var userlevel = (snapshot.val() && snapshot.val().userlevel)
        console.log(userlevel);
        if(userlevel == 1){
          
            
        
        } else {
          this.navCtrl.setRoot(SchoolHomePage);
        }
      });
    };

     

}



  logOut() {
      this.authData.logoutUser().then(() => {
          this.navCtrl.setRoot(Login);
      });
  }

  goToKlanten(): void {
    this.navCtrl.setRoot(ContactPage);
}

goToKalender(): void {
  this.navCtrl.setRoot(AboutPage);
}

goToAddKlant(): void {
  this.navCtrl.setRoot(Signup);
}



  
}





