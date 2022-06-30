import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RandomLootPage} from './random-loot.page';

const routes: Routes = [
  {
    path: '',
    component: RandomLootPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomLootPageRoutingModule {
}
