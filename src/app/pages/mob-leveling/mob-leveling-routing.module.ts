import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MobLevelingComponent} from "./mob-leveling/mob-leveling.component";

const routes: Routes = [
  {
    path: '',
    component: MobLevelingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobLevelingRoutingModule {
}
