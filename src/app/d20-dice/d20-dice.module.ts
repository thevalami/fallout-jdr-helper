import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {D20DicePage} from './d20-dice-page.component';

import {D20DicePageRoutingModule} from './d20-dice-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    D20DicePageRoutingModule
  ],
  declarations: [D20DicePage]
})
export class D20DicePageModule {
}
