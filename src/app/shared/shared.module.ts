import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RichTextDisplayComponent} from "./rich-text-display/rich-text-display.component";
import {GenericDataDisplayComponent} from "./generic-data-display/generic-data-display.component";
import {IonicModule} from "@ionic/angular";
import {CombatDiceComponent} from "./combat-dice-modal/combat-dice/combat-dice.component";
import {CombatDiceModalPage} from "./combat-dice-modal/combat-dice-modal.page";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [RichTextDisplayComponent, GenericDataDisplayComponent, CombatDiceModalPage, CombatDiceComponent],
  exports: [RichTextDisplayComponent, GenericDataDisplayComponent, CombatDiceModalPage, CombatDiceComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class SharedModule {
}
