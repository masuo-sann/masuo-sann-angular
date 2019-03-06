import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isPanelOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  closePanel($event): void {
    this.isPanelOpen = false;
    console.log("[DEBUG] close panel !");
  }
}
