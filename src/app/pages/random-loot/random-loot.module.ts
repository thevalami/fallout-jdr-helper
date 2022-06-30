import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RandomLootPageRoutingModule} from './random-loot-routing.module';

import {RandomLootPage} from './random-loot.page';
import {LootsDisplayComponent} from "./loots-display/loots-display.component";
import {RichTextDisplayComponent} from "../../shared/rich-text-display/rich-text-display.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomLootPageRoutingModule
  ],
  declarations: [RandomLootPage, LootsDisplayComponent, RichTextDisplayComponent]
})
export class RandomLootPageModule {
}
