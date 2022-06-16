import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {DicesPages} from './dices.pages';
import {CombatDiceComponent} from "./combat-dice/combat-dice.component";
import {D20DiceComponent} from "./d20-dice/d20-dice.component";
import {DiceDetailsPipe} from "../../pipes/dice-details.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DicesPages
      }
    ])
  ],
  declarations: [DicesPages, CombatDiceComponent, D20DiceComponent, DiceDetailsPipe],
  exports: [DicesPages],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DicesPageModule {
}
