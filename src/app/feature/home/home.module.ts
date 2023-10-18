import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SummaryComponent } from './pages/summary/summary.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class HomeModule { }
