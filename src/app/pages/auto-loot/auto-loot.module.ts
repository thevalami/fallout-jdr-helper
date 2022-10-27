import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AutoLootPageRoutingModule} from './auto-loot-routing.module';

import {AutoLootPage} from './auto-loot.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoLootPageRoutingModule,
    SharedModule
  ],
  declarations: [AutoLootPage]
})
export class AutoLootPageModule {
}
