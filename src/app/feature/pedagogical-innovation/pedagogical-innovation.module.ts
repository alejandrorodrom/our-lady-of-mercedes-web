import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedagogicalInnovationRoutingModule } from './pedagogical-innovation-routing.module';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { PhilosophicalSessionsComponent } from './pages/philosophical-sessions/philosophical-sessions.component';
import { PhilosophicalWorkshopsComponent } from './pages/philosophical-workshops/philosophical-workshops.component';
import { CurrentPhilosophicalComponent } from './pages/current-philosophical/current-philosophical.component';
import { ReflectiveStrategiesComponent } from './pages/reflective-strategies/reflective-strategies.component';
import { PhilosophicalStrategiesComponent } from './pages/reflective-strategies/pages/philosophical-strategies/philosophical-strategies.component';
import { ProcessedProductsComponent } from './pages/reflective-strategies/pages/processed-products/processed-products.component';


@NgModule({
  declarations: [
    PresentationComponent,
    PhilosophicalSessionsComponent,
    PhilosophicalWorkshopsComponent,
    CurrentPhilosophicalComponent,
    ReflectiveStrategiesComponent,
    PhilosophicalStrategiesComponent,
    ProcessedProductsComponent
  ],
  imports: [
    CommonModule,
    PedagogicalInnovationRoutingModule
  ]
})
export class PedagogicalInnovationModule { }
