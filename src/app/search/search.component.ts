import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { SearchConfirmComponent } from '../search-confirm/search-confirm.component';

export interface SearchRequestData {
  searchWord: string;
  requestNumber: number;
  searchPeriod: string;
  sentiment: boolean;
  entity: boolean;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchWord: string;
  requestNumber: number;
  searchPeriod: string = 'Week';
  searchPeriods: string[] = ['Week', 'Month', 'Full'];
  sentiment = false;
  entity = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchConfirmComponent, {
      width: '500px',
      data: {
        searchWord: this.searchWord,
        requestNumber: this.requestNumber,
        searchPeriod: this.searchPeriod,
        sentiment: this.sentiment,
        entity: this.entity,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.searchWord = result.requestNumber;
    });
  }
}
