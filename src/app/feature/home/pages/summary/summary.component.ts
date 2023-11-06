import { Component } from '@angular/core';
import { MODULES_ROUTES } from "../../../../core/routes/modules.routes";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  protected readonly MODULES_ROUTES = MODULES_ROUTES;
}
