import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { SearchDetailComponent } from '../search-detail/search-detail.component';
import { WordSearch } from "../interface/word-search";
import { ResultService } from '../service/server/result.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ResultListComponent implements OnInit {

  constructor(public dialog: MatDialog, public resultService: ResultService) { }

  displayedColumns: string[] = ['registerDate', 'searchWord', 'requestNumber', 'status'];
  ELEMENT_DATA: WordSearch[];
  dataSource: MatTableDataSource<WordSearch>;
  expandedElement: WordSearch | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.resultService.collectHistoryList().subscribe(
      resp => {
        if(resp.result === 'REDIRECT'){
          console.log('redirect');
          window.location.assign(resp.message);
        } else if(resp.result === 'ERROR'){
          console.error('error: ' + resp.message);
          console.log(resp.body);
        } else if(resp.result === 'SUCCESS'){
          console.log('success!');
          this.ELEMENT_DATA = resp.body;
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
        } 
      },
    )
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDetail(result: WordSearch): void {
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

