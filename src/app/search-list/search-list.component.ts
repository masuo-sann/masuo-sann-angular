import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SearchDetailComponent } from '../search-detail/search-detail.component';
import { WordSearch } from "../interface/word-search";
import { SearchService } from "../service/server/search.service";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})

export class SearchListComponent implements OnInit {

  constructor(public dialog: MatDialog, public searchService: SearchService) { }

  displayedColumns: string[] = ['registerDate', 'searchWord', 'requestNumber', 'status'];
  ELEMENT_DATA: WordSearch[];
  dataSource: MatTableDataSource<WordSearch>;

  ngOnInit() {
    this.searchService.collectSearchingWord().subscribe(
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
          console.log(JSON.stringify(resp.body));
        } 
      },
      error => console.error(error)
    );
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

