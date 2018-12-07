import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isPanelOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  closePanel($event): void {
    this.isPanelOpen = false;
    console.log("[DEBUG] close panel !");
  }
}
