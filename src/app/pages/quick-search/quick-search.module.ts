import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {QuickSearchPageRoutingModule} from './quick-search-routing.module';

import {QuickSearchPage} from './quick-search.page';
import {GenericTitleSearchPipe} from "../../pipes/generic-data-search.pipe";
import {SharedModule} from "../../shared/shared.module";
import {DicesPageModule} from "../dices/dices.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickSearchPageRoutingModule,
    SharedModule,
    DicesPageModule
  ],
  providers: [GenericTitleSearchPipe],
  declarations: [QuickSearchPage]
})
export class QuickSearchPageModule {
}
