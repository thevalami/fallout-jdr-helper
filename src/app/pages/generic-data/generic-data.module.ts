import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {GenericDataPageRoutingModule} from './generic-data-routing.module';

import {GenericDataPage} from './generic-data.page';
import {CleanDataPipe} from "../../pipes/clean-data.pipe";
import {QuickSearchPageModule} from "../quick-search/quick-search.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericDataPageRoutingModule,
    QuickSearchPageModule,
    SharedModule
  ],
  declarations: [GenericDataPage, CleanDataPipe]
})
export class GenericDataPageModule {
}
