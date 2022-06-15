import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CombatDicePage} from './combat-dice-page.component';

const routes: Routes = [
  {
    path: '',
    component: CombatDicePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombatDicePageRoutingModule {
}
