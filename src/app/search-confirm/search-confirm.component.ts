import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { SearchRequestData } from "../search/search.component";

@Component({
  selector: 'app-search-confirm',
  templateUrl: './search-confirm.component.html',
  styleUrls: ['./search-confirm.component.css']
})
export class SearchConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SearchConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SearchRequestData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  searchRequest(): string {
    console.log("search request!!");
    return "success!";
  }

}
