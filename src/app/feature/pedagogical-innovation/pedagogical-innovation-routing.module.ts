import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PEDAGOGICAL_INNOVATION_PAGES } from "../../core/routes/pedagogical-innovation.routes";
import { PresentationComponent } from "./pages/presentation/presentation.component";
import { PhilosophicalSessionsComponent } from "./pages/philosophical-sessions/philosophical-sessions.component";
import { PhilosophicalWorkshopsComponent } from "./pages/philosophical-workshops/philosophical-workshops.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: PEDAGOGICAL_INNOVATION_PAGES.PRESENTATION,
    pathMatch: 'full'
  },
  {
    path: PEDAGOGICAL_INNOVATION_PAGES.PRESENTATION,
    component: PresentationComponent
  },
  {
    path: PEDAGOGICAL_INNOVATION_PAGES.PHILOSOPHICAL_SESSIONS,
    component: PhilosophicalSessionsComponent
  },
  {
    path: PEDAGOGICAL_INNOVATION_PAGES.PHILOSOPHICAL_WORKSHOPS,
    component: PhilosophicalWorkshopsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedagogicalInnovationRoutingModule { }
