import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RandomLootPageRoutingModule} from './random-loot-routing.module';

import {RandomLootPage} from './random-loot.page';
import {LootsDisplayComponent} from "./loots-display/loots-display.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomLootPageRoutingModule,
    SharedModule
  ],
  declarations: [RandomLootPage, LootsDisplayComponent]
})
export class RandomLootPageModule {
}
