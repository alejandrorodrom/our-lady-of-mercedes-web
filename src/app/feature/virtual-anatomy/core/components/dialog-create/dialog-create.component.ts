import { Component, Inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateGroupResponse } from '../../interfaces/post/create-signup/response';

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule]
})
export class DialogCreateComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data.groupData.serialGroup); // Aquí puedes acceder al dato enviado
  }
}
