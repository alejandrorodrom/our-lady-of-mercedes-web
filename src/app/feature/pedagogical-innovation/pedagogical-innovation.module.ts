import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedagogicalInnovationRoutingModule } from './pedagogical-innovation-routing.module';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { PhilosophicalSessionsComponent } from './pages/philosophical-sessions/philosophical-sessions.component';


@NgModule({
  declarations: [
    PresentationComponent,
    PhilosophicalSessionsComponent
  ],
  imports: [
    CommonModule,
    PedagogicalInnovationRoutingModule
  ]
})
export class PedagogicalInnovationModule { }
