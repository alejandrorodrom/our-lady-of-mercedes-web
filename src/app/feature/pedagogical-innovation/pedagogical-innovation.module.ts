import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedagogicalInnovationRoutingModule } from './pedagogical-innovation-routing.module';
import { PresentationComponent } from './pages/presentation/presentation.component';


@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule,
    PedagogicalInnovationRoutingModule
  ]
})
export class PedagogicalInnovationModule { }
