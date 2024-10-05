import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../../core/interfaces/get/get-all/student';
import { studentsData } from '../../core/interfaces/get/get-all/student-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-group',
  templateUrl: './data-group.component.html',
  styleUrls: ['./data-group.component.scss'],
  standalone: true,
  imports: [MatTableModule, RouterModule, MatPaginatorModule, MatButtonModule, CommonModule],
})
export class DataGroupComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'lastName',
    'grade',
    'section',
    'createAt',
    'points',
  ];
  dataSource = new MatTableDataSource<User>(studentsData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
