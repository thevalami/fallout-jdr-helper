import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {GenericDataPageRoutingModule} from './generic-data-routing.module';

import {GenericDataPage} from './generic-data.page';
import {GenericDataSearchPipe} from "../pipes/generic-data-search.pipe";
import {CleanDataPipe} from "../pipes/clean-data.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericDataPageRoutingModule
  ],
  declarations: [GenericDataPage, GenericDataSearchPipe, CleanDataPipe]
})
export class GenericDataPageModule {
}
