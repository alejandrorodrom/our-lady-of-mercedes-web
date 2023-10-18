import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from "./pages/summary/summary.component";
import { HOME_ROUTES } from "../../shared/constants/routes/home.routes";

const routes: Routes = [
  {
    path: HOME_ROUTES.SUMMARY,
    component: SummaryComponent
  },
  {
    path: '**',
    redirectTo: HOME_ROUTES.SUMMARY,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
