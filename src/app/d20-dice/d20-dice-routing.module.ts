import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {D20DicePage} from './d20-dice-page.component';

const routes: Routes = [
  {
    path: '',
    component: D20DicePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D20DicePageRoutingModule {
}
