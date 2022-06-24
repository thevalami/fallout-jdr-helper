import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {QuickSearchPageRoutingModule} from './quick-search-routing.module';

import {QuickSearchPage} from './quick-search.page';
import {GenericTitleSearchPipe} from "../../pipes/generic-data-search.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickSearchPageRoutingModule
  ],
  providers: [GenericTitleSearchPipe],
  declarations: [QuickSearchPage]
})
export class QuickSearchPageModule {
}
