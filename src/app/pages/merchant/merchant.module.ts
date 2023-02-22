import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {MerchantPage} from './merchant-page.component';
import {SharedModule} from '../../shared/shared.module';
import {MerchantRoutingModule} from "./merchant-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantRoutingModule,
    SharedModule
  ],
  declarations: [MerchantPage]
})
export class MerchantModule {
}
