import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SchoolHomePage } from './school-home';

@NgModule({
  declarations: [
    SchoolHomePage,
  ],
  exports: [
    SchoolHomePage
  ]
})
export class SchoolHomePageModule {}
