import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PEDAGOGICAL_INNOVATION_PAGES,
  REFLECTIVE_STRATEGIES_PAGES
} from "../../core/routes/pedagogical-innovation.routes";
import { PresentationComponent } from "./pages/presentation/presentation.component";
import { PhilosophicalSessionsComponent } from "./pages/philosophical-sessions/philosophical-sessions.component";
import { PhilosophicalWorkshopsComponent } from "./pages/philosophical-workshops/philosophical-workshops.component";
import { CurrentPhilosophicalComponent } from "./pages/current-philosophical/current-philosophical.component";
import { ReflectiveStrategiesComponent } from "./pages/reflective-strategies/reflective-strategies.component";
import {
  ProcessedProductsComponent
} from "./pages/reflective-strategies/pages/processed-products/processed-products.component";
import {
  PhilosophicalStrategiesComponent
} from "./pages/reflective-strategies/pages/philosophical-strategies/philosophical-strategies.component";

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
    path: PEDAGOGICAL_INNOVATION_PAGES.REFLECTIVE_STRATEGIES,
    component: ReflectiveStrategiesComponent,
    children: [
      {
        path: '',
        redirectTo: REFLECTIVE_STRATEGIES_PAGES.PHILOSOPHICAL_STRATEGIES,
        pathMatch: 'full'
      },
      {
        path: REFLECTIVE_STRATEGIES_PAGES.PHILOSOPHICAL_STRATEGIES,
        component: PhilosophicalStrategiesComponent
      },
      {
        path: REFLECTIVE_STRATEGIES_PAGES.PROCESSED_PRODUCTS,
        component: ProcessedProductsComponent
      }
    ]
  },
  {
    path: PEDAGOGICAL_INNOVATION_PAGES.PHILOSOPHICAL_WORKSHOPS,
    component: PhilosophicalWorkshopsComponent
  },
  {
    path: PEDAGOGICAL_INNOVATION_PAGES.CURRENT_PHILOSOPHICAL,
    component: CurrentPhilosophicalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedagogicalInnovationRoutingModule { }
