import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FormControl, Validators, ValidationErrors } from '@angular/forms';

import { SearchConfirmComponent } from '../search-confirm/search-confirm.component';
import { ValidateService } from "../service/validate.service";

@Component({
  selector: 'app-search-request',
  templateUrl: './search-request.component.html',
  styleUrls: ['./search-request.component.css']
})
export class SearchRequestComponent implements OnInit {
  @Output() closePanel = new EventEmitter();
  searchWordControl: FormControl = new FormControl('', [
    Validators.required,
  ]);

  requestNumberControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  searchPeriod: string = 'WEEK';
  searchPeriods: string[] = ['WEEK', 'MONTH', 'FULL'];
  sentiment: boolean = false;
  entity: boolean = false;
  analysisOption: string;

  constructor(public dialog: MatDialog, private validateService: ValidateService ) { }

  ngOnInit() {
  }

  close(): void {
    this.closePanel.emit();
  }

  openDialog(): void {
    if(!this.searchWordControl.value || !this.requestNumberControl.value) {
      if(!this.searchWordControl.value) this.searchWordControl.markAsDirty();
      if(!this.requestNumberControl.value) this.requestNumberControl.markAsDirty();
      return;
    } 

    this.analysisOption = this.validateService.getAnalyseOption(this.sentiment, this.entity);
    const dialogRef = this.dialog.open(SearchConfirmComponent, {
      width: '500px',
      data: {
        searchWord: this.searchWordControl.value,
        requestNumber: this.requestNumberControl.value,
        searchPeriod: this.searchPeriod,
        analysisOption: this.analysisOption,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
