import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from './my-material/my-material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { HistoryComponent } from './history/history.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    HistoryComponent,
    SearchDetailComponent,
    HistoryDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MyMaterialModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
