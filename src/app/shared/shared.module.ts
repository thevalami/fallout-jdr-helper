import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RichTextDisplayComponent} from "./rich-text-display/rich-text-display.component";
import {GenericDataDisplayComponent} from "./generic-data-display/generic-data-display.component";
import {IonicModule} from "@ionic/angular";
import {CombatDiceComponent} from "./combat-dice-modal/combat-dice/combat-dice.component";
import {CombatDiceModalPage} from "./combat-dice-modal/combat-dice-modal.page";
import {FormsModule} from "@angular/forms";
import {ModsDisplayModalComponent} from "./mods-display-modal/mods-display-modal.component";
import {GenericDataSearchPipe, GenericTitleSearchPipe} from "../pipes/generic-data-search.pipe";

@NgModule({
  declarations: [RichTextDisplayComponent, GenericDataDisplayComponent, CombatDiceModalPage, CombatDiceComponent, ModsDisplayModalComponent, GenericTitleSearchPipe, GenericDataSearchPipe],
  exports: [RichTextDisplayComponent, GenericDataDisplayComponent, CombatDiceModalPage, CombatDiceComponent, ModsDisplayModalComponent, GenericTitleSearchPipe, GenericDataSearchPipe],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class SharedModule {
}
