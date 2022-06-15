import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {ItemDetailsExpandablePage} from './item-details-expandable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsExpandablePage
      }
    ])
  ],
  declarations: [ItemDetailsExpandablePage],
  exports: [ItemDetailsExpandablePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsExpandablePageModule {
}
