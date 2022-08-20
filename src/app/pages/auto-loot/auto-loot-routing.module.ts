import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AutoLootPage} from './auto-loot.page';

const routes: Routes = [
  {
    path: '',
    component: AutoLootPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoLootPageRoutingModule {
}
