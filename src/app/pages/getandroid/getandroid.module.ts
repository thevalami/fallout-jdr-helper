import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {GetandroidPageRoutingModule} from './getandroid-routing.module';

import {GetandroidPage} from './getandroid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetandroidPageRoutingModule
  ],
  declarations: [GetandroidPage]
})
export class GetandroidPageModule {
}
