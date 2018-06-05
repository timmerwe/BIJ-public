import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,
    AlertController } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { EmailValidator } from '../../validators/email';
import {HomePage}from'../home/home';
import * as firebase from 'firebase'


/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

    public signupForm;
    loading: any;


    constructor(public nav: NavController, public authData: AuthData,
        public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
        public alertCtrl: AlertController) {

        this.signupForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
            school: [''],
            adres: [''],
            postcode: [''],
            plaats: [''],
            contactpersoon: [''],
            telefoon: [''],
            contactEmail: ['']

        })
    }

    /**
     * If the form is valid it will call the AuthData service to sign the user up password displaying a loading
     *  component while the user waits.
     *
     * If the form is invalid it will just log the form value, feel free to handle that as you like.
     */
    

    alert(){
        var user = firebase.auth().currentUser;
        console.log(firebase.auth().currentUser.email);
    }

    
    signupUser() {
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        } else {
            this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.school, this.signupForm.value.adres, this.signupForm.value.postcode, this.signupForm.value.plaats, this.signupForm.value.contactpersoon, this.signupForm.value.telefoon, this.signupForm.value.contactEmail, '_' + Math.random().toString(36).substr(2, 9), new Date().toUTCString(), firebase.auth().currentUser.email)
                .then(() => {
                    this.loading.dismiss().then(() => {
                        this.nav.setRoot(HomePage);
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
