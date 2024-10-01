import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MODULES_ROUTES } from "./core/routes/modules.routes";

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
    path: MODULES_ROUTES.PEDAGOGICAL_INNOVATION,
    loadChildren: () => import('./feature/pedagogical-innovation/pedagogical-innovation.module').then(m => m.PedagogicalInnovationModule)
  },
  {
    path: MODULES_ROUTES.VIRTUAL_ANATOMY,
    loadChildren: () => import('./feature/virtual-anatomy/virtual-anatomy.module').then(m => m.VirtualAnatomyModule)
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
