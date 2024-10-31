import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { environment } from 'src/environment/environments';
import { GroupFacade } from '../../aplication/group.facade';
import { SearchGroupBody } from '../../core/interfaces/search-group.interface';
import { TokensService } from '../../core/stores/tokens.service';

@Component({
  selector: 'app-search-group',
  templateUrl: './search-group.component.html',
  styleUrls: ['./search-group.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterLink
  ],
})
export class SearchGroupComponent {
  apiUrl = signal<string>(environment.api);
  private readonly groupService: GroupFacade = inject(GroupFacade);
  private readonly router: Router = inject(Router);
  private readonly tokenService: TokensService = inject(TokensService);
  name = '';
  serial = '';

  searchGroup() {
    const body: SearchGroupBody = {
      nameGroup: this.name,
      serialGroup: this.serial,
    };

    this.groupService
      .searchGroup(body).subscribe(token => {
        this.tokenService.accessToken = token.access;
        this.tokenService.refreshToken = token.refresh;
        this.router.navigate(['/anatomia-virtual/datos-grupos']);
      })
      /*.pipe(
        tap((token) => {
          this.tokenService.accessToken = token.access;
          this.tokenService.refreshToken = token.refresh;
        }),
        switchMap(() => this.groupService.getGroup())
      )
      .subscribe({
        next: (resp) => {
          console.log(resp);
          //this.router.navigate(['/anatomia-virtual/datos-grupos']);
        },
        error: (err) => {
          console.log(err);
        },
      });*/
  }
}
