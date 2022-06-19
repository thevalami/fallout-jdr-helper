import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./folder/folder.module').then(m => m.HomePageModule)
  },
  {
    path: 'dices',
    loadChildren: () => import('./pages/dices/dices.module').then(m => m.DicesPageModule)
  },
  {
    path: 'generic-data/:type',
    loadChildren: () => import('./generic-data/generic-data.module').then(m => m.GenericDataPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
