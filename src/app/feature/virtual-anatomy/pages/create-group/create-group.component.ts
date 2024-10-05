import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { environment } from 'src/environment/environments';
import { GroupFacade } from '../../aplication/group.facade';
import { group } from '@angular/animations';
import { CreateGroupBody } from 'src/app/feature/virtual-anatomy/core/interfaces/post/create-signup/body'

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ]
})
export class CreateGroupComponent {
  apiUrl = signal<string>(environment.api)
  private readonly groupService: GroupFacade = inject(GroupFacade);
  value = '';

  createGroup() {
    const body: CreateGroupBody = {
      nameGroup: this.value
    }

    this.groupService.createGroup(body).subscribe(resp => console.log(resp))
  }
}
