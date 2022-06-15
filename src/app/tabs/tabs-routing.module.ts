import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'combat-dice',
        loadChildren: () => import('../combat-dice/combat-dice.module').then(m => m.CombatDicePageModule)
      },
      {
        path: 'd20-dice',
        loadChildren: () => import('../d20-dice/d20-dice.module').then(m => m.D20DicePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/combat-dice',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/combat-dice',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
