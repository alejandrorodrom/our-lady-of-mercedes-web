import { AfterViewInit, Component, inject, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Group, User } from '../../core/interfaces/group.interface';
import { CommonModule } from '@angular/common';
import { GroupFacade } from '../../aplication/group.facade';

@Component({
  selector: 'app-data-group',
  templateUrl: './data-group.component.html',
  styleUrls: ['./data-group.component.scss'],
  standalone: true,
  imports: [MatTableModule, RouterModule, MatPaginatorModule, MatButtonModule, CommonModule],
})
export class DataGroupComponent {
  private readonly groupService: GroupFacade = inject(GroupFacade)

  displayedColumns: string[] = [
    'name',
    'lastName',
    'grade',
    'section',
    'createAt',
    'points',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataGroup!: User[];
  dataTable!: MatTableDataSource<User>
  totalScores: number[] = []
  groupName!: string

  ngOnInit() {
    this.groupService.getGroup().subscribe({
      next: (resp: Group[]) => {
        this.groupName = resp[0].nameGroup;
        this.dataGroup = resp[0].users;
        this.dataTable = new MatTableDataSource<User>(this.dataGroup);
        this.dataTable.paginator = this.paginator;
        for (let i = 0; i < this.dataGroup.length; i++) {
          let totalScore = 0;

          for (let j = 0; j < this.dataGroup[i].answer.length; j++) {
            totalScore += this.dataGroup[i].answer[j].answerTF;
          }

          this.totalScores.push(totalScore);
        }
      },
      error: (err) => {
        console.log('este es el error: ',err)
      }
    });
  }
}
