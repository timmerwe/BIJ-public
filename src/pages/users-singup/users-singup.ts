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
  selector: 'page-users-singup',
  templateUrl: 'users-singup.html',
})
export class UsersSingupPage {
  public signupForm;
    loading: any;

  constructor(public nav: NavController, public authData: AuthData,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      leerling: [''],
      code: [''],
      rol: ['']

  })
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersSingupPage');
  }

  signupUser() {
    if (!this.signupForm.valid) {
        console.log(this.signupForm.value);
    } else {
        this.authData.signupUser2(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.leerling, this.signupForm.value.code, this.signupForm.value.rol)
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
