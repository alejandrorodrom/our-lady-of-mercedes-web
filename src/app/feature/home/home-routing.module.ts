import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from "./pages/summary/summary.component";
import { HOME_PAGES } from "../../core/routes/home.routes";

const routes: Routes = [
  {
    path: '',
    redirectTo: HOME_PAGES.SUMMARY,
    pathMatch: 'full'
  },
  {
    path: HOME_PAGES.SUMMARY,
    component: SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
