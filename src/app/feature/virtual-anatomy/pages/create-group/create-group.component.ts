import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CreateGroupBody } from 'src/app/feature/virtual-anatomy/core/interfaces/post/create-signup/body';
import { environment } from 'src/environment/environments';
import { GroupFacade } from '../../aplication/group.facade';
import { DialogCreateComponent } from '../../core/components/dialog-create/dialog-create.component';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatDialogModule
  ]
})
export class CreateGroupComponent {
  apiUrl = signal<string>(environment.api)
  private readonly groupService: GroupFacade = inject(GroupFacade);
  private readonly dialog: MatDialog = inject(MatDialog);
  value = '';

  /*test: CreateGroupResponse = {
    serialGroup: 'asdasdasd',
    tokens: {
      access: 'ASDASDSA',
      refresh: 'ASDASDSDSD'
    }
  }

  ngOnInit(){
    this.dialog.open(DialogCreateComponent, {
      data: {
        groupName: "asd",
        groupData: this.test
      }});
  }*/

  createGroup() {
    const body: CreateGroupBody = {
      nameGroup: this.value
    }

    this.groupService.createGroup(body).subscribe(resp => {
      this.dialog.open(DialogCreateComponent, {
        data: {
          groupName: body.nameGroup,
          groupData: resp
        }
      });
    })
  }
}
