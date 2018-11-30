import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from './my-material/my-material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { ResultComponent } from './result/result.component';
import { HistoryComponent } from './history/history.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { SearchConfirmComponent } from './search-confirm/search-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchDetailComponent,
    ResultComponent,
    HistoryComponent,
    HistoryDetailComponent,
    SearchConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SearchConfirmComponent],
})
export class AppModule { }
