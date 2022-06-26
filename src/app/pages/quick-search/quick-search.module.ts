import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {QuickSearchPageRoutingModule} from './quick-search-routing.module';

import {QuickSearchPage} from './quick-search.page';
import {GenericTitleSearchPipe} from "../../pipes/generic-data-search.pipe";
import {GenericDataDisplayComponent} from "../generic-data-display/generic-data-display.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickSearchPageRoutingModule
  ],
  providers: [GenericTitleSearchPipe],
  exports: [
    GenericDataDisplayComponent
  ],
  declarations: [QuickSearchPage, GenericDataDisplayComponent]
})
export class QuickSearchPageModule {
}
