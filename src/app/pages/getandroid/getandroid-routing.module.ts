import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GetandroidPage} from './getandroid.page';

const routes: Routes = [
  {
    path: '',
    component: GetandroidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetandroidPageRoutingModule {
}
