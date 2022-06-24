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
    loadChildren: () => import('./pages/generic-data/generic-data.module').then(m => m.GenericDataPageModule)
  },
  {
    path: 'quick-search',
    loadChildren: () => import('./pages/quick-search/quick-search.module').then(m => m.QuickSearchPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
