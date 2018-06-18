import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,
    AlertController } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { EmailValidator } from '../../validators/email';
import {HomePage}from'../home/home';
import * as firebase from 'firebase'
import { Login } from '../login/login';
import { ContactPage } from '../contact/contact';
import { SchoolHomePage } from '../school-home/school-home';
import {SchoolGebruikersOverzichtPage} from '../school-gebruikers-overzicht/school-gebruikers-overzicht';

/**
 * Generated class for the UsersSingupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-maak-evenement',
  templateUrl: 'maak-evenement.html',
})
export class MaakEvenementPage {
  public signupForm;
    loading: any;

  constructor(public nav: NavController, public authData: AuthData,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    this.signupForm = formBuilder.group({
      type: [''],
      omschrijving: [''],
      datum: [''],
      locatie: [''],
      beheerder: ['']

  })
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersSingupPage');
  }

  signupUser() {
    if (!this.signupForm.valid) {
        console.log(this.signupForm.value);
    } else {
        this.authData.maakEvent(this.signupForm.value.type, this.signupForm.value.omschrijving, this.signupForm.value.datum, this.signupForm.value.locatie, this.signupForm.value.beheerder, '_' + Math.random().toString(36).substr(2, 9))
            .then(() => {
                this.loading.dismiss().then(() => {
                    this.nav.setRoot(SchoolGebruikersOverzichtPage);
                });
            }, (error) => {
                this.loading.dismiss().then(() => {
                    let alert = this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
        this.loading = this.loadingCtrl.create();
        this.loading.present();
    }
}

}
