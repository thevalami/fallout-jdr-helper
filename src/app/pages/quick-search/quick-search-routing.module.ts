import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {QuickSearchPage} from './quick-search.page';

const routes: Routes = [
  {
    path: '',
    component: QuickSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickSearchPageRoutingModule {
}
