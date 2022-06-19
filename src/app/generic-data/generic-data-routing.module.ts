import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GenericDataPage} from './generic-data.page';

const routes: Routes = [
  {
    path: '',
    component: GenericDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericDataPageRoutingModule {
}
