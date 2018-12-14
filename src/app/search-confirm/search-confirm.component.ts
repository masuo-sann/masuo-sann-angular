import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { SearchRequest } from "../interface/search-request";
import { SearchService } from '../service/server/search.service';
import { ApiResponse } from '../interface/api-response';

@Component({
  selector: 'app-search-confirm',
  templateUrl: './search-confirm.component.html',
  styleUrls: ['./search-confirm.component.css']
})
export class SearchConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SearchConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SearchRequest,
    public searchRepo: SearchService,
    ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  searchRequest(): void {
    this.searchRepo.searchRequest(this.data).subscribe(
      resp => {
        if(resp.result === 'REDIRECT'){
          console.log('redirect');
          window.location.assign(resp.message);
        } else if(resp.result === 'ERROR'){
          console.error('error: ' + resp.message);
          console.log(resp.body);
        } else if(resp.result === 'SUCCESS'){
          console.log('success!');
        }
      },
      error => console.error(error)
    )
  }
}
