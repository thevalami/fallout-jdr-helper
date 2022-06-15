import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {ItemDetailsExpandablePage} from './item-details-expandable.page';
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
        component: ItemDetailsExpandablePage
      }
    ])
  ],
  declarations: [ItemDetailsExpandablePage, CombatDiceComponent, D20DiceComponent, DiceDetailsPipe],
  exports: [ItemDetailsExpandablePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemDetailsExpandablePageModule {
}
