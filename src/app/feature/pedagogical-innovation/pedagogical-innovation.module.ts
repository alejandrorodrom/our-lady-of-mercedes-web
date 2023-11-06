import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedagogicalInnovationRoutingModule } from './pedagogical-innovation-routing.module';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { PhilosophicalSessionsComponent } from './pages/philosophical-sessions/philosophical-sessions.component';
import { PhilosophicalWorkshopsComponent } from './pages/philosophical-workshops/philosophical-workshops.component';


@NgModule({
  declarations: [
    PresentationComponent,
    PhilosophicalSessionsComponent,
    PhilosophicalWorkshopsComponent
  ],
  imports: [
    CommonModule,
    PedagogicalInnovationRoutingModule
  ]
})
export class PedagogicalInnovationModule { }
