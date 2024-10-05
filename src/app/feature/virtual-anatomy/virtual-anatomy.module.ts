import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { DataGroupComponent } from './pages/data-group/data-group.component';
import { VirtualAnatomyRoutingModule } from './virtual-anatomy-routing.module';
import { SearchGroupComponent } from './pages/search-group/search-group.component';
import { CreateGroupComponent } from './pages/create-group/create-group.component';
import { GroupFacade } from './aplication/group.facade';
import { GroupHttp } from './infraestructure/group.http';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  ],
  providers: [
    {
      provide: GroupFacade,
      useClass: GroupHttp
    }
  ],
  imports: [
    HttpClientModule,
    PresentationComponent,
    CommonModule,
    VirtualAnatomyRoutingModule,
    DataGroupComponent,
    SearchGroupComponent,
    CreateGroupComponent
  ]
})
export class VirtualAnatomyModule { }
