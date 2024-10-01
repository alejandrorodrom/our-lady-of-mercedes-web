import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VIRTUAL_ANATOMY_PAGES } from 'src/app/core/routes/virtual-anatomy.routes';
import { SearchGroupComponent } from './pages/search-group/search-group.component';
import { DataGroupComponent } from './pages/data-group/data-group.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: VIRTUAL_ANATOMY_PAGES.SEARCH_GROUPS,
    pathMatch: 'full'
  },
  {
    path: VIRTUAL_ANATOMY_PAGES.SEARCH_GROUPS,
    component: SearchGroupComponent
  },
  {
    path: VIRTUAL_ANATOMY_PAGES.DATA_GROUPS,
    component: DataGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualAnatomyRoutingModule { }
