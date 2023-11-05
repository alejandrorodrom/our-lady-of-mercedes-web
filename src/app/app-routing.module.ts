import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MODULES_ROUTES } from "./shared/constants/routes/modules.routes";

const routes: Routes = [
  {
    path: '',
    redirectTo: MODULES_ROUTES.HOME,
    pathMatch: 'full'
  },
  {
    path: MODULES_ROUTES.HOME,
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: MODULES_ROUTES.HOME,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
