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
 * Generated class for the EditEvenementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-evenement',
  templateUrl: 'edit-evenement.html',
})
export class EditEvenementPage {
  public signupForm;
  loading: any;

  users: any = [];

  constructor(public nav: NavController, public authData: AuthData,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, public navParams: NavParams) {

      this.signupForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        leerling: [''],
        rol: ['']
  
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEvenementPage');
  }

  signupUser() {
    if (!this.signupForm.valid) {
        console.log(this.signupForm.value);
    } else {
        this.authData.updateUser(this.signupForm.value.email, this.signupForm.value.leerling, this.signupForm.value.rol)
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
