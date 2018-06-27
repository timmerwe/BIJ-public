import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { Login } from '../pages/login/login';

import {ResetPassword}from '../pages/reset-password/reset-password';
import {Signup} from '../pages/signup/signup';
import { SchoolHomePage } from '../pages/school-home/school-home';
import {SchoolGebruikersInfoPage} from '../pages/school-gebruikers-info/school-gebruikers-info';
import {SchoolGebruikersOverzichtPage} from '../pages/school-gebruikers-overzicht/school-gebruikers-overzicht';
import {UsersSingupPage} from '../pages/users-singup/users-singup';
import {SchoolEvenementenInfoPage} from '../pages/school-evenementen-info/school-evenementen-info';
import {SchoolEvenementenOverzichtPage} from '../pages/school-evenementen-overzicht/school-evenementen-overzicht';
import {MaakEvenementPage} from '../pages/maak-evenement/maak-evenement';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthData } from '../providers/auth-data';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { EditEvenementPage } from '../pages/edit-evenement/edit-evenement';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    EditUserPage,
    ResetPassword,
    Signup,
    SchoolHomePage,
    SchoolGebruikersInfoPage,
    SchoolGebruikersOverzichtPage,
    UsersSingupPage,
    SchoolEvenementenInfoPage,
    SchoolEvenementenOverzichtPage,
    MaakEvenementPage,
    EditEvenementPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
      TabsPage,
      Login,
      ResetPassword,
      Signup,
      EditUserPage,
      SchoolHomePage,
      SchoolGebruikersInfoPage,
      SchoolGebruikersOverzichtPage,
      UsersSingupPage,
      SchoolEvenementenInfoPage,
      SchoolEvenementenOverzichtPage,
      MaakEvenementPage,
      EditEvenementPage
  ],
  providers: [
      AuthData,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
