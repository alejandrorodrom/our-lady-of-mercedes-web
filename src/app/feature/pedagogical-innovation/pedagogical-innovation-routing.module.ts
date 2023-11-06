import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PEDAGOGICAL_INNOVATION_PAGES } from "../../core/routes/pedagogical-innovation.routes";
import { PresentationComponent } from "./pages/presentation/presentation.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: PEDAGOGICAL_INNOVATION_PAGES.PRESENTATION,
    pathMatch: 'full'
  },
  {
    path: PEDAGOGICAL_INNOVATION_PAGES.PRESENTATION,
    component: PresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedagogicalInnovationRoutingModule { }
