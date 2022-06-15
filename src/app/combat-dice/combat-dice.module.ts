import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CombatDicePage} from './combat-dice-page.component';

import {CombatDicePageRoutingModule} from './combat-dice-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CombatDicePageRoutingModule
  ],
  declarations: [CombatDicePage]
})
export class CombatDicePageModule {
}
