import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog } from '@angular/material';
import { SearchDetailComponent } from '../search-detail/search-detail.component';
import { Result } from "../interface/result";

const ELEMENT_DATA: Result[] = [
  {searchWord: 'Ishino', requestNumber: 10000, searchPeriod: "WEEK", analysisOption: "ONLY_ENTITY", status: "SEARCHING", user: "akihisaishino@gmail.com", searchDate: new Date()},
];

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})

export class ResultListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['searchWord', 'requestNumber', 'searchPeriod', 'analysisOption'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDetail(result: Result): void {
    const dialogRef = this.dialog.open(SearchDetailComponent, {
      width: '500px',
      data: {
        searchWord: result.searchWord,
        requestNumber: result.requestNumber,
        searchPeriod: result.searchPeriod,
        analysisOption: result.analysisOption,
        status: result.status,
        user: result.user,
        searchDate: result.searchDate,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

